local menu = {}
menu.settings = { fullscreen = false, width = 800, height = 600, volume = 5 }

local menuButtons = {
  Button.create(70, 140, R.fonts.Roboto, "play"),
  Button.create(70, 180, R.fonts.Roboto, "load saved game"),
  Button.create(70, 220, R.fonts.Roboto, "sync saved game"),
  Button.create(70, 260, R.fonts.Roboto, "vol-"), Button.create(155, 260, R.fonts.Roboto, "vol+"),
  Button.create(70, 300, R.fonts.Roboto, "toggle fullscreen"),
  Button.create(70, 360, R.fonts.Roboto, "exit")
}
local activeButton = 1

function menu.save()
  menu.settings.width, menu.settings.height = love.graphics.getDimensions()
  
  local drop = {}
  local json = Tserial.pack(menu.settings, drop, true)
  local success = love.filesystem.write("settings.cfg", json)
  if not success then mods.overlay.error("Couldn't save settings!") end
  return success
end

function menu.handleButton(i)
  if i == 1 then
    menu.save()
    loadLevel("game")
  elseif i == 4 then
    menu.settings.volume = menu.settings.volume - 1
    if menu.settings.volume < 0 then menu.settings.volume = 0 end
  elseif i == 5 then
    menu.settings.volume = menu.settings.volume + 1
    if menu.settings.volume > 10 then menu.settings.volume = 10 end
  elseif i == 6 then
    menu.settings.fullscreen = not menu.settings.fullscreen
    if not menu.settings.fullscreen then
      menu.settings.width = 800
      menu.settings.height = 600
    end
    love.window.setMode(menu.settings.width, menu.settings.height, { resizable=true, fullscreen=menu.settings.fullscreen })
  elseif i == 7 then
    love.event.quit()
  end
end

function menu.enter()
  local success = love.filesystem.read("settings.cfg")
  if success then
    menu.settings = Tserial.unpack(success, true)
    love.window.setMode(menu.settings.width, menu.settings.height, { resizable=true, fullscreen=menu.settings.fullscreen })
  end
end

local lastmx = 0
local lastmy = 0
function menu.update(dt)
  local mx, my = love.mouse.getPosition()
  if lastmx ~= mx and lastmy ~= my then
    for i, e in ipairs(menuButtons) do
      if Button.isHover(e, mx, my, 15) then activeButton = i end
    end
  end
end

function menu.draw()
  love.graphics.setFont(R.fonts.RobotoBold)
  love.graphics.setColor(150, 150, 170, 256)
  love.graphics.print("Untitled", 60, 60)
  
  for i, e in ipairs(menuButtons) do
    local color = { 150, 150, 150, 256 }
    if i == activeButton then
      color = { 240, 240, 240, 256 }
    end
    Button.render(e, color)
  end
  
  love.graphics.setColor(150, 150, 150, 256)
  love.graphics.print(menu.settings.volume.."0%", 110, 260)
end

function menu.keyreleased(key, code)
  if DEBUG then mods.overlay.print(key) end
  if key == "return" then
    menu.handleButton(activeButton)
  elseif key == "up" or key == "left" then
    activeButton = activeButton - 1
    if activeButton < 1 then activeButton = 6 end
  elseif key == "down" or key == "right" then
    activeButton = activeButton + 1
    if activeButton > 6 then activeButton = 1 end
  end
end

function menu.mousereleased(x, y, code)
  for i, e in ipairs(menuButtons) do
    if Button.isHover(e, x, y, 15) then
      activeButton = i
      menu.handleButton(activeButton)
    end
  end
end

function menu.quit()
  menu.save()
end

return menu