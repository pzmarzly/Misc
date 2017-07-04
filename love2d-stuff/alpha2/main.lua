DEBUG = true

-- ZeroBrane
if DEBUG and arg and arg[#arg] == "-debug" then require("mobdebug").start() end

-- External libs
HClass                  = require "lib.hump.class"
HTimer                  = require "lib.hump.timer"
HCamera                 = require "lib.hump.camera"
TSerial                 = require "lib.Tserial.Tserial"

-- Resources
R = {}
function R.load(file) if R[file] == nil then R[file] = require("res."..file..".resx") end end

-- Loading fonts now - this will allow text clicking
R.load("fonts")

-- Internal libs
Button                  = require "engine.util.button"

-- Modules
mods                    = {}
mods.overlay            = require "engine.mods.overlay"
mods.game               = require "engine.mods.game"
mods.menu               = require "engine.mods.menu"

-- Entry module
local currentMod = "menu"

-- Pause managment
local unpaused = true
function love.focus(f)
  unpaused = f
end

-- Level managment
function loadLevel(s)
  currentMod = s
  mods[s].enter()
end

function love.load()
  loadLevel(currentMod)
end

-- Redirections
function love.update(dt)
  if unpaused then
    mods[currentMod].update(dt)
  end
end

function love.draw()
  mods.overlay.draw()
  mods[currentMod].draw()
end

function love.keyreleased(key, code)
  mods[currentMod].keyreleased(key, code)
end

function love.mousereleased(x, y, code, touch)
  mods[currentMod].mousereleased(x, y, code)
end

function love.quit()
  mods[currentMod].quit()
end