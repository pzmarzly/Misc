local Button = {}

function Button.create(x, y, font, text)
  local newbtn = { _x=x, _y=y, _font=font, _text=text }
  newbtn._x2 = x + font:getWidth(text)
  newbtn._y2 = y + font:getHeight()
  return newbtn
end

function Button.render(btn, color)
  love.graphics.setFont(btn._font)
  love.graphics.setColor(color[1], color[2], color[3], color[4])
  love.graphics.print(btn._text, btn._x, btn._y)
end

function Button.isHover(btn, x, y, inaccuracy)
  return x > btn._x - inaccuracy
     and x < btn._x2 + inaccuracy
     and y > btn._y - inaccuracy
     and y < btn._y2 + inaccuracy
end

return Button