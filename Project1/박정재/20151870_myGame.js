prison = game.createRoom("prison", "감옥1.png") // 감옥 생성
outside = game.createRoom("outside", "감옥2.png") // 감옥 바깥 생성
wall = game.createRoom("wall", "힌트.png") // 힌트가 적혀있는 벽 생성
room4 = game.createRoom("room4", "감옥4.png") // 철창이 열린 감옥 생성

// 감옥 내부
prison.door = prison.createObject("door", "화살표1.png") // 화살표를 클릭하면 이동할 수 있다. (문 역할)
prison.door.setWidth(200)
prison.locateObject(prison.door, 700, 200)

prison.key = prison.createObject("key", "열쇠.png") // 수갑을 풀 열쇠 생성
prison.key.setWidth(20)
prison.locateObject(prison.key, 518, 460)

prison.shackles = prison.createObject("shackles", "수갑.png") // 수갑 생성
prison.shackles.setWidth(200)
prison.locateObject(prison.shackles, 550, 650)
prison.shackles.hide()

prison.door.onClick = function() {
  if(prison.door.isClosed()) {
    prison.door.open()
    printMessage("철창 너머로 희미하게 키패드와 호수가 보인다...") // 처음 바깥으로 이동 시, 출력할 메시지.
  }
  else if(prison.door.isOpened()){
    printMessage("내가 갇힌 곳은 302호구나...") // 두 번째 이동 시, 출력할 메시지.
    prison.door.lock()
  }
  playSound("click.wav")
  game.move(outside)
}

prison.key.onClick = function() {
  prison.key.pick()
  playSound("key.wav")
  printMessage("열쇠를 주웠다!")
  prison.shackles.show() // 열쇠를 주으면, 수갑이 나타난다.
}

prison.shackles.onClick = function() {
  if(game.getHandItem() == prison.key) { // 열쇠를 이용해 수갑을 푼다.
    prison.shackles.hide()
    outside.keypad.unlock()
    printMessage("수갑을 풀었다!")
  }
  else {
    printMessage("열쇠를 이용해 수갑을 풀자...")
  }
  playSound("chain.wav")
}

prison.door2 = prison.createObject("door2", "화살표3.png")
prison.door2.setWidth(200)
prison.locateObject(prison.door2, 950, 350)

prison.door2.onClick = function() {
  if(prison.door2.isClosed()) {
    prison.door2.open()
    printMessage("이게 뭐지...?") // 벽에 있는 힌트를 처음 봤을 때 출력할 메시지.
  }
  playSound("click.wav")
  game.move(wall)
}

// 감옥 바깥
outside.door = outside.createObject("door", "화살표2.png")
outside.door.setWidth(200)
outside.locateObject(outside.door, 650, 200)

outside.keypad = outside.createObject("keypad", "키패드-우.png")
outside.keypad.setWidth(150)
outside.locateObject(outside.keypad, 400, 400)
outside.keypad.lock()

outside.door.onClick = function() {
  playSound("click.wav")
  game.move(prison)
}

outside.keypad.onClick = function() {
  if(outside.keypad.isLocked()) { // 수갑이 채워져 있으면 키패드를 만질 수 없다.
    printMessage("수갑이 채워져 있어 키패드에 손이 닿지 않는다...")
    playSound("bump.wav")
  }
  else {
    printMessage("비밀번호는 벽의 숫자와 호수가 연관이 있을 것 같다...")
    playSound("beep.wav")
    showKeypad("telephone", "2151", function(){
      playSound("prison_open.wav")
      printMessage("문이 열렸다!")
      game.move(room4) // 비밀번호를 맞추면 철창(문)이 열린다.
    })
  }
}

// 벽 힌트
wall.door = wall.createObject("door", "화살표4.png")
wall.door.setWidth(200)
wall.locateObject(wall.door, 75, 300)

wall.door.onClick = function() {
  game.move(prison)
  playSound("click.wav")
}

// 게임 클리어
room4.door = room4.createObject("door", "화살표1.png")
room4.door.setWidth(200)
room4.locateObject(room4.door, 700, 230)

room4.door.onClick = function() {
  game.clear()
}

// 게임 시작
playSound("prison_close.wav")
game.start(prison)
printMessage("정신을 차려보니 수갑이 채워진 채 감옥에 갇혀있다...")
