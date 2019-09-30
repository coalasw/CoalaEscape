room = game.createRoom("room", "배경-1.png") // 방 생성
room2 = game.createRoom("room2","배경-6.png") // 방 생성

room.door = room.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 300) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.move(room2) // room2로 이동
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 930, 250) // 위치 변경

room.keypad.onClick = function() {
	printMessage("비밀번호를 입력하세요.")
	showKeypad("number", "1009" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room.clock = room.createObject("clock", "시계.png")
room.clock.setWidth(100)
room.locateObject(room.clock, 100, 110)

room.cabinet = room.createObject("cabinet", "캐비닛-왼쪽-닫힘.png")
room.cabinet.setWidth(200)
room.locateObject(room.cabinet, 110, 300)
room.cabinet.move = true // 플래그 변수
room.cabinet.onDrag = function(direction){ // 드래그 모션 direction - Up, Down, Left, Right
	if(direction == "Right" && room.cabinet.move){ // 오른쪽으로 드래그 했으면
		printMessage("캐비닛을 밀어버렸다!")
		room.cabinet.moveX(150) // 
		room.cabinet.moveY(-30) //
		room.cabinet.move = false // 이후에는 더 이상 움직이지 않도록 합니다.
	} else {
		printMessage("열리지 않는다.")
	}
}

room.table = room.createObject("table", "테이블-우.png") // 테이블 생성
room.table.setWidth(350)
room.locateObject(room.table, 650, 400)

room.mac = room.createObject("mac", "파란맥-우.png") // 맥 생성
room.mac.setWidth(150)
room.locateObject(room.mac, 655, 230)
room.mac.hide()

room.mac.onClick = function() {
	showImageViewer("스크린.png"); // what time is it
}

room.mac2 = room.createObject("mac2", "맥-우.png")
room.mac2.setWidth(150)
room.locateObject(room.mac2, 655,230)
room.mac2.onClick = function() {
	room.mac2.hide()
	room.mac.show()
}


room.chair = room.createObject("chair", "의자-1.png")
room.chair.setWidth(160)
room.locateObject(room.chair, 900, 500)

room.book = room.createObject("book", "책1-2.png")
room.book.setWidth(100)
room.locateObject(room.book, 900, 485)
room.book.onClick = function() {
	showImageViewer("종이.png", "책.txt"); // 이미지 출력
}


//
//
// r o o m 2

room2.door = room2.createObject("door", "문-오른쪽-열림.png") // 문 생성
room2.door.setWidth(136) // 크기 조절
room2.locateObject(room2.door, 1049, 305) // 문 배치
room2.door.open() // door 상태를 opened로 변경

room2.door.onClick = function(){
	game.move(room) // room으로 이동
}

room2.door2 = room2.createObject("door2", "문3-좌-닫힘.png")
room2.door2.setWidth(136)
room2.locateObject(room2.door2, 170, 335)
room2.door2.lock()

room2.door2.onClick = function() { // door2를 클릭했을 때
	if(room2.door2.isClosed()){ // door2가 closed 상태이면
		room2.door2.open() // door2의 상태를 open으로 바꿈
	} else if (room2.door2.isOpened()){ // door2가 opened 상태이면
		game.clear() // 게임 클리어
	} else if (room2.door2.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room2.door2.onOpen = function() {
	room2.door2.setSprite("문3-좌-열림.png")
}

room2.keypad = room2.createObject("keypad", "숫자키-좌.png") // 오브젝트 생성
room2.keypad.setWidth(50) // 크기 조절
room2.locateObject(room2.keypad, 200, 300) // 위치 변경

room2.keypad.onClick = function() {
	printMessage("비밀번호를 입력하세요.")
	showKeypad("alphabet", "BINGO" , function(){
		room2.door2.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room2.tape = room2.createObject("tape", "tape.png")
room2.tape.setWidth(50)
room2.locateObject(room2.tape, 700, 440)
room2.tape.hide()
room2.tape.onClick = function() {
	room2.tape.pick()
	printMessage("카세트테이프를 주웠다!")
}

room2.hole = room2.createObject("hole", "hole.png")
room2.hole.setWidth(80)
room2.locateObject(room2.hole, 800, 230)

room2.hole.onClick = function() {
	room2.tape.show()
	printMessage("구멍에서 무언가가 떨어졌다!")
}


room2.TV = room2.createObject("TV", "TV-오른쪽.png")
room2.TV.setWidth(200)
room2.locateObject(room2.TV, 800, 200)

room2.TV.onDrag = function(direction){
	if(direction == "Up"){
		printMessage("TV가 밀린다!")
		room2.TV.moveX(0)
		room2.TV.moveY(-100) //
		room2.TV.move = 1
	} else {
		
	}
}



room2.box = room2.createObject("box", "상자4-2-닫힘.png")
room2.box.setWidth(170)
room2.locateObject(room2.box,800, 500)

room2.box2 = room2.createObject("box2", "상자3-닫힘.png")
room2.box2.setWidth(250)
room2.locateObject(room2.box2, 1100, 500)

room2.box2.onClick = function() {
	printMessage("빈 상자이다..")
	room2.box2.setSprite("상자3-열림.png")	
}

room2.plant = room2.createObject("plant", "식물2-1.png")
room2.plant.setWidth(250)
room2.locateObject(room2.plant, 500, 370)
room2.plant.onClick = function() {
	printMessage("평범한 식물인 듯 하다..")
}

room2.radio = room2.createObject("radio", "라디오.png")
room2.radio.setWidth(90)
room2.locateObject(room2.radio, 795, 470)

room2.radio.hide()
room2.radio.onClick = function() {
	if(game.getHandItem() == room2.tape) {
		printMessage("재생버튼을 눌러보세요")
		showAudioPlayer("bingo.wav")
	} else {
		printMessage("재생할 테이프가 없다.")
	}
}

room2.box.onClick = function() {
	if(room2.box.isOpened()) {
		room2.box.close()
	} else if(room2.box.isClosed()) {
		room2.box.open()
		printMessage("상자 안에 무언가 있다.")
	} else {
	
	}
}

room2.box.onOpen = function() {
	room2.box.setSprite("상자4-2-열림.png")
	room2.radio.show()
}

room2.box.onClose = function() {
	room2.box.setSprtie("상자4-2-닫힘.png")
	room2.radio.hide()
}




game.start(room) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력