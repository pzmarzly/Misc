local overlay = {}
local buffer = {}

function overlay.draw()
  if #buffer > 0 then
    love.graphics.setColor(255, 0, 0, 255)
    love.graphics.setFont(R.fonts.VeraSans)
    for i, txt in ipairs(buffer) do
      love.graphics.print(txt, 10, 15 * i - 5)
    end
  end
end

function overlay.print(s)
  table.insert(buffer, s)
  if #buffer > 10 then table.remove(buffer, 1) end
end

return overlay