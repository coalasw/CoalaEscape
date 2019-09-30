room = game.createRoom("room", "배경-1.png") // 방 생성
bathroom = game.createRoom("bathroom", "배경-6.png") //화장실
windowroom = game.createRoom("windowroom", "창문배경-2.png") //창문 화면
room2 = game.createRoom("room2", "배경-8.png") //방2

//room
//doortoroom2
room.doortoroom2 = room.createObject("doortoroom2", "문-오른쪽-닫힘.png") // 문 생성
room.doortoroom2.setWidth(136) // 크기 조절
room.locateObject(room.doortoroom2, 1049, 300) // 문 배치
room.doortoroom2.lock() // door 상태를 locked로 변경
room.doortoroom2.onClick = function() { // door를 클릭했을 때
	if(room.doortoroom2.isClosed()){ // door가 closed 상태이면
		room.doortoroom2.open() // door의 상태를 open으로 바꿈
	} else if (room.doortoroom2.isOpened()){ // door가 opened 상태이면
		game.move(room2) // room2로 이동
	} else if (room.doortoroom2.isLocked()){ // door가 locked 상태일때
		printMessage("문이 잠겨있다.")
		}
}
room.doortoroom2.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.doortoroom2.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}
room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 1150, 300) // 위치 변경
room.keypad.onClick = function() {
	printMessage("내 생일")
	showKeypad("number", "0829" , function(){ // 키패드 1 - 숫자4자리
		room.doortoroom2.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열렸다.")
	 })
}

//doortobathroom
room.doortobathroom = room.createObject("doortobathroom", "문-우-닫힘.png") // 문 생성
room.doortobathroom.setWidth(120) // 크기 조절
room.locateObject(room.doortobathroom, 800, 260) // 문 배치
room.doortobathroom.lock()
room.doortobathroom.onClick = function() { // door를 클릭했을 때
	if(room.doortobathroom.isClosed()){ // door가 closed 상태이면
		room.doortobathroom.open() // door의 상태를 open으로 바꿈
	} else if (room.doortobathroom.isOpened()){ // door가 opened 상태이면
		game.move(bathroom) // bathroom로 이동
	} else if (room.doortobathroom.isLocked()){
		printMessage("문이 열리지 않는다. 문고리가 고장난 것 같다.")
		if(game.getHandItem() == room.hammer) {
			printMessage("문고리를 부셨다.")
			room.doortobathroom.unlock()
		}}
}
room.doortobathroom.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.doortobathroom.setSprite("문-우-열림.png") // 열린 문으로 변경
}
room.doortobathroom.onClose = function() {
	room.doortobathroom.setSprite("문-우-닫힘.png")
}


//책상
room.desk = room.createObject("desk", "테이블3-1.png")
room.desk.setWidth(300)
room.locateObject(room.desk, 470, 355)
//의자
room.chair = room.createObject("chair", "의자1-7.png")
room.chair.setWidth(120)
room.locateObject(room.chair, 580, 360)
//노트
room.note = room.createObject("note", "노트.png")
room.note.setWidth(65)
room.locateObject(room.note, 470, 300)
room.note.onClick = function() {
	showImageViewer("노트페이지.png", "노트기록.txt"); // 이미지 출력
}
//접시
windowroom.dish = windowroom.createObject("dish", "접시.png")
windowroom.dish.setWidth(250)
windowroom.locateObject(windowroom.dish, 800, 630)
//새
windowroom.bird = windowroom.createObject("bird", "새.png")
windowroom.bird.setWidth(200)
windowroom.locateObject(windowroom.bird, 500, 550)
windowroom.bird.hide()
//창문 애벌레1
windowroom.larva = windowroom.createObject("larva", "애벌레.png")
windowroom.larva.setWidth(50)
windowroom.locateObject(windowroom.larva, 800, 630)
windowroom.larva.hide()
//창문 애벌레2
windowroom.larva2 = windowroom.createObject("larva2", "애벌레.png")
windowroom.larva2.setWidth(50)
windowroom.locateObject(windowroom.larva2, 800, 630)
windowroom.larva2.hide()
//room 애벌레
room.larva = room.createObject("larva", "애벌레.png")
room.larva.setWidth(25)
room.locateObject(room.larva, 935, 500)
room.larva.hide()
roomlarva = false
//화분
room.pot = room.createObject("pot", "식물1.png")
room.pot.setWidth(130)
room.locateObject(room.pot, 920, 350)
room.pot.onClick = function() { // 화분를 클릭했을 때
	if (roomlarva == false){
	room.larva.show()
	roomlarva = true
}}
room.larva.onClick = function(){
	windowroom.larva2.pick()
	room.larva.hide()
	printMessage("애벌레를 주웠다.")
}
//열매
windowroom.berry = windowroom.createObject("berry", "열매.png")
windowroom.berry.setWidth(150) // 크기 조절
windowroom.locateObject(windowroom.berry, 600, 470) // 위치 변경
windowroom.berry.hide()
//접시 클릭
windowroom.dish.onClick = function(){ //접시를 클릭했을때
	if(game.getHandItem() == windowroom.larva2) {
		windowroom.larva.show()
		windowroom.bird.show()
		windowroom.berry.show()
	}
}
windowroom.bird.onClick = function(){
	printMessage("새가 빨간 열매 8개를 물고있다.")
}
//상자
room.box = room.createObject("box", "상자4-1-닫힘.png")
room.box.setWidth(130)
room.locateObject(room.box, 190, 550)
room.box.onClick = function() { // 클릭했을 때
	if(room.box.isOpened()) { // Opened 상태인 경우
		room.box.close() // close
	} else if(room.box.isClosed()) { //Closed 상태인 경우
		room.box.open() // open
	} else { 
		// do nothing
	}
}
//망치
room.hammer = room.createObject("hammer", "망치3.png")
room.hammer.setWidth(90)
room.locateObject(room.hammer, 190, 540)
room.hammer.hide()
room.box.onOpen = function() {
	room.box.setSprite("상자4-1-열림.png") // 열린 그림으로 변경
	room.hammer.show() // 망치 보이기
}
room.box.onClose = function() {
	room.box.setSprite("상자4-1-닫힘.png") // 닫힌 그림으로 변경
	room.hammer.hide() // 망치 숨기기
}
room.hammer.onClick = function(){
	room.hammer.pick()
	printMessage("망치를 얻었다.")
}
//bathroomdoor
bathroom.bathroomdoor = bathroom.createObject("bathroomdoor", "문-우-닫힘.png") // 문 생성
bathroom.bathroomdoor.setWidth(120) // 크기 조절
bathroom.locateObject(bathroom.bathroomdoor, 800, 260) // 문 배치
bathroom.bathroomdoor.onClick = function() { // door를 클릭했을 때
	if(bathroom.bathroomdoor.isClosed()){ // door가 closed 상태이면
		bathroom.bathroomdoor.open() // door의 상태를 open으로 바꿈
	} else if (bathroom.bathroomdoor.isOpened()){ // door가 opened 상태이면
		game.move(room) // room로 이동
	} else { 
		//아무것도 하지 않는다.
	}
}
bathroom.bathroomdoor.onOpen = function() { // door 상태가 open으로 변경되면 실행
	bathroom.bathroomdoor.setSprite("문-우-열림.png") // 열린 문으로 변경
}
bathroom.bathroomdoor.onClose = function() {
	bathroom.bathroomdoor.setSprite("문-우-닫힘.png")
}
//세면대
bathroom.sink = bathroom.createObject("sink", "싱크대-왼쪽.png")
bathroom.sink.setWidth(400)
bathroom.locateObject(bathroom.sink, 470, 360)
//화장실 선반
bathroom.closet = bathroom.createObject("closet", "찬장-오른쪽-닫힘.png")
bathroom.closet.setWidth(200)
bathroom.locateObject(bathroom.closet, 1100, 250)
bathroom.closet.onClick = function() { // 클릭했을 때
	if(bathroom.closet.isOpened()) { // Opened 상태인 경우
		bathroom.closet.close() // close
	} else if(bathroom.closet.isClosed()) { //Closed 상태인 경우
		bathroom.closet.open() // open
	} else { 
		// do nothing
	}
}
//화장실에서 보이는 열쇠
bathroom.key = bathroom.createObject("key", "열쇠.png")
bathroom.key.setWidth(60)
bathroom.locateObject(bathroom.key, 1100, 240)
bathroom.key.hide()
bathroomkey = false
bathroom.closet.onOpen = function() {
	bathroom.closet.setSprite("찬장-오른쪽-열림.png") // 열린 그림으로 변경
	if (bathroomkey == false){
	bathroom.key.show() // 키 보이기
	bathroomkey = true
}}
bathroom.closet.onClose = function() {
	bathroom.closet.setSprite("찬장-오른쪽-닫힘.png") // 닫힌 그림으로 변경
	bathroom.key.hide() // 키 숨기기
}
bathroom.key.onClick = function(){
	room.key.pick()
	bathroom.key.hide()
	printMessage("열쇠를 얻었다.")
}
//room에서 사용하는 열쇠
room.key = room.createObject("key", "열쇠.png")
room.key.setWidth(60)
room.locateObject(bathroom.key, 1100, 240)
room.key.hide()
//카펫
bathroom.carpet = bathroom.createObject("carper", "카펫-1.png")
bathroom.carpet.setWidth(900)
bathroom.locateObject(bathroom.carpet, 600, 550)
//변기
bathroom.toilet = bathroom.createObject("toilet", "변기.png")
bathroom.toilet.setWidth(220)
bathroom.locateObject(bathroom.toilet, 210, 440)
//욕조
bathroom.bath = bathroom.createObject("bath", "욕조.png")
bathroom.bath.setWidth(400)
bathroom.locateObject(bathroom.bath, 1050, 450)
//오리
bathroom.duck = bathroom.createObject("duck", "오리.png")
bathroom.duck.setWidth(70)
bathroom.locateObject(bathroom.duck, 1050, 540)
bathroom.duck.onClick = function(){ //접시를 클릭했을때
	printMessage("노란 오리 인형 5개")
}
bathroom.duck2 = bathroom.createObject("duck2", "오리.png")
bathroom.duck2.setWidth(70)
bathroom.locateObject(bathroom.duck2, 1080, 550)
bathroom.duck2.onClick = function(){ //접시를 클릭했을때
	printMessage("노란 오리 인형 5개")
}
bathroom.duck3 = bathroom.createObject("duck3", "오리.png")
bathroom.duck3.setWidth(70)
bathroom.locateObject(bathroom.duck3, 1110, 560)
bathroom.duck3.onClick = function(){ //접시를 클릭했을때
	printMessage("노란 오리 인형 5개")
}
bathroom.duck4 = bathroom.createObject("duck4", "오리.png")
bathroom.duck4.setWidth(70)
bathroom.locateObject(bathroom.duck4, 1140, 570)
bathroom.duck4.onClick = function(){ //접시를 클릭했을때
	printMessage("노란 오리 인형 5개")
}
bathroom.duck5 = bathroom.createObject("duck5", "오리.png")
bathroom.duck5.setWidth(70)
bathroom.locateObject(bathroom.duck5, 1170, 580)
bathroom.duck5.onClick = function(){ //접시를 클릭했을때
	printMessage("노란 오리 인형 5개")
}
//창문
room.doortowindow = room.createObject("doortowindow", "창문2-닫힘.png")
room.doortowindow.setWidth(200)
room.locateObject(room.doortowindow, 170, 200)
room.doortowindow.lock() // door 상태를 locked로 변경
room.doortowindow.onClick = function() { // door를 클릭했을 때
	if(room.doortowindow.isClosed()){ // door가 closed 상태이면
		room.doortowindow.open() // door의 상태를 open으로 바꿈
	} else if (room.doortowindow.isOpened()){ // door가 opened 상태이면
		game.move(windowroom) // windowroom로 이동
	} else if (room.doortowindow.isLocked()){ // door가 locked 상태이면
		printMessage("창문이 잠겨있다.") // 메시지 출력
		if(game.getHandItem() == room.key) {
			printMessage("창문의 잠금장치를 풀었다.")
			room.doortowindow.unlock()
}}
}
room.doortowindow.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.doortowindow.setSprite("창문2-열림.png") // 열린 문으로 변경
}
room.doortowindow.onClose = function() {
	room.doortowindow.setSprite("창문2-닫힘.png")
}
//뒤로가기
windowroom.back = windowroom.createObject("back", "뒤로가기2.png")
windowroom.back.setWidth(100)
windowroom.locateObject(windowroom.back, 150, 600)
windowroom.back.onClick = function(){ //뒤로가기를 클릭했을때
	game.move(room)
}
//doortoroom2
room2.room2door = room2.createObject("room2door", "문-오른쪽-닫힘.png") // 문 생성
room2.room2door.setWidth(136) // 크기 조절
room2.locateObject(room2.room2door, 1049, 315) // 문 배치
room2.room2door.onClick = function() { // door를 클릭했을 때
	if(room2.room2door.isClosed()){ // door가 closed 상태이면
		room2.room2door.open() // door의 상태를 open으로 바꿈
	} else if (room2.room2door.isOpened()){ // door가 opened 상태이면
		game.move(room) // room로 이동
	} else {}
}
room2.room2door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room2.room2door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}
room2.room2door.onClose = function() {
	room2.room2door.setSprite("문-오른쪽-닫힘.png")
}
//나가는 문
room2.out = room2.createObject("out", "문2-좌-닫힘.png") // 문 생성
room2.out.setWidth(136) // 크기 조절
room2.locateObject(room2.out, 150, 300) // 문 배치
room2.out.lock() // door 상태를 locked로 변경
room2.out.onClick = function() { // door를 클릭했을 때
	if(room2.out.isClosed()){ // door가 closed 상태이면
		room2.out.open() // door의 상태를 open으로 바꿈
	} else if (room2.out.isOpened()){ // door가 opened 상태이면
		game.clear() // room2로 이동
	} else if (room2.out.isLocked()){ // door가 locked 상태일때
		printMessage("역시나 문이 잠겨있다.")
		}
}
room2.out.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room2.out.setSprite("문2-좌-열림.png") // 열린 문으로 변경
}
//표지판
room2.arrow = room2.createObject("arrow", "표지판2.png")
room2.arrow.setWidth(100)
room2.locateObject(room2.arrow, 300, 200)
//방2 선반
room2.shelf = room2.createObject("shelf", "선반-우.png")
room2.shelf.setWidth(460)
room2.locateObject(room2.shelf, 710, 220)
//방2 책
room2.book = room2.createObject("book", "책1-1.png")
room2.book.setWidth(80)
room2.locateObject(room2.book, 780, 210)
room2.book.onClick = function() {
	showImageViewer("종이.png", "책.txt"); // 이미지 출력
}
//방2 테이블
room2.table = room2.createObject("table", "테이블-오른쪽.png")
room2.table.setWidth(270)
room2.locateObject(room2.table, 600, 355)
//오렌지
room2.orange = room2.createObject("orange", "오렌지.png")
room2.orange.setWidth(70)
room2.locateObject(room2.orange, 660, 270)
room2.orange.onClick = function(){ //접시를 클릭했을때
	printMessage("오렌지 3개")
}
//병3
room2.bottle = room2.createObject("bottle", "병.png")
room2.bottle.setWidth(90)
room2.locateObject(room2.bottle, 700, 430)
room2.bottle.onClick = function(){ //접시를 클릭했을때
	printMessage("파란 병 3개")
}
room2.bottle2 = room2.createObject("bottle2", "병.png")
room2.bottle2.setWidth(90)
room2.locateObject(room2.bottle2, 720, 440)
room2.bottle2.onClick = function(){ //접시를 클릭했을때
	printMessage("파란 병 3개")
}
room2.bottle3 = room2.createObject("bottle3", "병.png")
room2.bottle3.setWidth(90)
room2.locateObject(room2.bottle3, 750, 410)
room2.bottle3.onClick = function(){ //접시를 클릭했을때
	printMessage("파란 병 3개")
}
room2.keypad = room2.createObject("keypad", "키패드-좌.png") // 오브젝트 생성
room2.keypad.setWidth(30) // 크기 조절
room2.locateObject(room2.keypad, 250, 300) // 위치 변경
room2.keypad.onClick = function() {
	showKeypad("number", "8353" , function(){ // 키패드 1 - 숫자4자리
		room2.out.unlock() // 출구의 잠금을 연다
		printMessage("잠금장치가 열렸다.")
	 })
}


game.start(room) // 게임시작
printMessage("환영합니다!")