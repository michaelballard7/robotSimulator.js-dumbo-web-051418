class Robot {
  constructor() {
    this.coordinates = [0,0]
    this.bearing = `north`
  }

  setCoordinates(x,y) {
    this.coordinates = [x,y]
  }

  setBearing(bearing) {
    switch (bearing) {
      case `north`:
        this.bearing = `north`
        break;
      case `west`:
        this.bearing = `west`
        break;
      case `east`:
        this.bearing = `east`
        break;
      case `south`:
        this.bearing = `south`
        break;
      default:
        throw `/Invalid Robot Bearing/i`
    }
  }

  place(obj) {
    this.setCoordinates(obj.x,obj.y)
    this.setBearing(obj.direction)
  }

  turnRight() {
    this.turn('right')
    console.log(`${this.bearing} ${this.coordinates}`)

  }

  turnLeft() {
    this.turn('left')
  }

  turn(direction){
    switch (this.bearing) {
      case `north`:
        return direction === 'right' ? this.bearing = `east` : this.bearing = `west`
        break;
      case `west`:
        return direction === 'right' ? this.bearing = `north` : this.bearing = `south`
        break;
      case `east`:
        return direction === 'right' ? this.bearing = `south` : this.bearing = `north`
        break;
      case `south`:
        return direction === 'right' ? this.bearing = `west` : this.bearing = `east`
        break;
    }
  }

  advance(){
    switch (this.bearing) {
      case `north`:
        return this.coordinates[1]+=1

      case `west`:
        return this.coordinates[0]-=1

      case `east`:
        return this.coordinates[0]+=1

      case `south`:
        return this.coordinates[1]-=1
    }
    this.setCoordinates()
  }

  translateInstructions(instructions){
    for(let i = 0; i<instructions.length; i++){
       switch(instructions[i]){
         case 'R':
          this.turnRight()
          break
         case 'L':
          this.turnLeft()
          break

         case 'A':
          this.advance()
          break

       }

      }
    }

}



function newMattObject(blah, thing, other){
  return {blah, thing,  other}
}
