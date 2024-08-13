class Player {
  playTurn(warrior) {
    if(warrior.feel().isEmpty()){
      if(warrior.health()<warrior.maxHealth()){
        warrior.rest()
      } else {
        warrior.walk()
      }
    }
    else {
      warrior.attack()
    }
  }
}
