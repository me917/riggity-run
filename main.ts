let RiggedyRunner = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 9 9 . . . . . 
    . . . . . 9 1 1 1 1 1 . . . . . 
    . . . . . 9 1 1 1 f f . . . . . 
    . . . . . 9 1 1 1 f f . . . . . 
    . . . . . 9 1 1 1 1 1 . . . . . 
    . . . . . 9 9 9 9 9 9 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(RiggedyRunner, 100, 100)
scene.cameraFollowSprite(RiggedyRunner)
