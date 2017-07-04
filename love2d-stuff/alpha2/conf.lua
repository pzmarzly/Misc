function love.conf(t)
  -- https://love2d.org/wiki/Config_Files#Current_Configuration_File
    t.version = "0.10.1"                -- The LÖVE version this game was made for (string)
    t.accelerometerjoystick = false     -- Enable the accelerometer on iOS and Android by exposing it as a Joystick (boolean)
    t.gammacorrect = true               -- Enable gamma-correct rendering, when supported by the system (boolean)
 
    t.identity = "Test1"                -- Save folder
    t.window.title = "Untitled"         -- The window title (string)
    t.window.icon = nil                 -- Filepath to an image to use as the window's icon (string)
    t.window.resizable = true           -- Let the window be user-resizable (boolean)
 
    t.modules.joystick = false          -- Enable the joystick module (boolean)
    t.modules.math = false              -- Enable the math module (boolean)
    t.modules.physics = false           -- Enable the physics module (boolean)
end