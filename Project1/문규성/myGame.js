room = game.createRoom("room", "background.png") // 방 생성

room.door = room.createObject("door", "door.png") // 문 생성
room.door.setWidth(200) // 크기 조절
room.locateObject(room.door, 115, 315) // 문 배치
room.door.lock() // door 상태를 locked로 변경

playSound("frontline.wav") // 멸공의 횃불 재생

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.clear() // 게임 클리어
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("door-open.png") // 열린 문으로 변경
	room.door.setWidth(200) // 크기 조절
	room.locateObject(room.door, 115, 315) // 문 배치
}

room.taeguk = room.createObject("taeguk", "taeguk.png") // 태극기 생성
room.taeguk.setWidth(100) // 크기 조절
room.locateObject(room.taeguk, 100, 110) // 태극기 배치

room.taeguk.onClick = function() { // taeguk을 클릭했을 때
	showImageViewer("koreanflag.png");
	printMessage("아! 나의 조국! 볼 때마다 벅차오른다!") // 메시지 출력
}

room.bookmu = room.createObject("bookmu", "bookmu.png") // 육군복무신조 생성
room.bookmu.setWidth(100) // 크기 조절
room.locateObject(room.bookmu, 250, 170) // 육군복무신조 배치

room.bookmu.onClick = function() { // bookmu을 클릭했을 때
	showImageViewer("bookmuin.jpg");
	printMessage("우리의 결의!") // 메시지 출력
}

room.bed1 = room.createObject("bed1", "bed1.png") // 침대 생성
room.bed1.setWidth(275) // 크기 조절
room.locateObject(room.bed1, 525, 387) // 침대 배치

room.bed1.onClick = function() { // 침대을 클릭했을 때
	printMessage("각이 참 잘 잡혀있다!") // 메시지 출력
}


room.keypad = room.createObject("keypad", "숫자키-좌.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 250, 290) // 위치 변경

room.keypad.onClick = function() {
	printMessage("비밀번호 : 국군의 날")
	showKeypad("number", "1001" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

game.start(room) // 게임시작
printMessage("익숙한 풍경이다... 분명 나는 1년 전에 전역을 했는데... 뭐지?") // 재입대 메시지 출력