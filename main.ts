sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    info.setLife(-5)
})
