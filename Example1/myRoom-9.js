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

room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 930, 250) // 위치 변경

room.keypad.onClick = function() {
	printMessage("올해는 몇 년도?")
	showKeypad("number", "2019" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(460)
room.locateObject(room.shelf, 250, 150)

room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(80)
room.locateObject(room.book, 100, 140)
room.book.onClick = function() {
	showImageViewer("종이.png", "책.txt"); // 이미지 출력
}

room.phone = room.createObject("phone", "전화기-오른쪽.png")
room.phone.setWidth(30)
room.locateObject(room.phone, 830, 250)
room.phone.onClick = function() {
	playSound("alarm.wav") // 오디오 재생
}

room.radio = room.createObject("radio", "라디오.png")
room.radio.setWidth(90)
room.locateObject(room.radio, 100, 550)
room.radio.onClick = function() {
	printMessage("재생버튼을 눌러보세요")
	showAudioPlayer("chick.wav") // 플레이어
}

room.table = room.createObject("table", "테이블-우.png") // 테이블 생성
room.table.setWidth(300)
room.locateObject(room.table, 550, 400)

room.mac = room.createObject("mac", "맥-우.png") // 맥 생성
room.mac.setWidth(130)
room.locateObject(room.mac, 560, 270)
room.mac.onClick = function() {
	showVideoPlayer("Wildlife.wmv") // 비디오 재생
}

room2.door = room2.createObject("door", "문-오른쪽-열림.png") // 문 생성
room2.door.setWidth(136) // 크기 조절
room2.locateObject(room2.door, 1049, 305) // 문 배치
room2.door.open() // door 상태를 opened로 변경

room2.door.onClick = function(){
	game.move(room) // room으로 이동
}

room2.cupboard = room2.createObject("cupboard", "찬장-2-닫힘.png") // 찬장 생성
room2.key = room2.createObject("key", "열쇠.png") // 열쇠 생성

//크기 조절
room2.cupboard.setWidth(250)
room2.key.setWidth(45)

//배치
room2.locateObject(room2.cupboard, 800, 323)
room2.locateObject(room2.key, 745, 315)

room2.key.hide() // key 숨기기

room2.cupboard.onClick = function() { // 클릭했을 때
	if(room2.cupboard.isOpened()) { // Opened 상태인 경우
		room2.cupboard.close() // close
	} else if(room2.cupboard.isClosed()) { //Closed 상태인 경우
		room2.cupboard.open() // open
	} else { 
		// do nothing
	}
}

room2.cupboard.onOpen = function() {
	room2.cupboard.setSprite("찬장-2-열림.png") // 열린 그림으로 변경
	room2.key.show() // key 보이기
}

room2.cupboard.onClose = function() {
	room2.cupboard.setSprite("찬장-2-닫힘.png") // 닫힌 그림으로 변경
	room2.key.hide() // key 숨기기
}

room.head = room.createObject("head", "드라이버비트.png")
room.handle = room.createObject("handle", "드라이버손잡이.png")
room.screwdriver = room.createObject("screwdriver", "드라이버.png")

room.head.setWidth(50)
room.handle.setWidth(50)
room.screwdriver.hide() // 조합 될 아이템 숨기기

room.locateObject(room.head, 500, 650)
room.locateObject(room.handle, 600, 650)

game.makeCombination(room.head, room.handle, room.screwdriver) // 헤드 + 손잡이 = 드라이버

room.head.onClick = function(){
	room.head.pick()
}
room.handle.onClick = function(){
	room.handle.pick()
}

room.shelf.onClick = function() {
	if(game.getHandItem() == room.screwdriver) {
		printMessage("나사를 단단히 조였다.")
	} else {
		printMessage("나사가 헐거워져있다.")
	}
}

game.start(room) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력