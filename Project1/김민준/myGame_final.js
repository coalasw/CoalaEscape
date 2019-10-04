room = game.createRoom("room", "배경-1.png")

room.door = room.createObject("door", "문-오른쪽-닫힘.png")
room.door.setWidth(136)
room.locateObject(room.door, 1049, 300)
room.door.lock()

room.door.onClick = function() { 
	if(room.door.isClosed()){ 
		room.door.open() 
	} else if (room.door.isOpened()){ 
		game.clear() 
	} else if (room.door.isLocked()){ 
		printMessage("문이 잠겨있다") 
	}
}

room.door.onOpen = function() { 
	room.door.setSprite("문-오른쪽-열림.png") 
}

room.keypad = room.createObject("keypad", "숫자키-우.png")
room.keypad.setWidth(50)
room.locateObject(room.keypad, 930, 250)

room.keypad.onClick = function() {
	printMessage("4자리 비밀번호를 입력하세요")
	showKeypad("number", "1389" , function(){ 
		room.door.unlock()
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room.shelf = room.createObject("shelf", "선반-좌.png")
room.shelf.setWidth(460)
room.locateObject(room.shelf, 250, 150)

room.book0 = room.createObject("book0", "파일-1.png")
room.book0.setWidth(95)
room.locateObject(room.book0, 235, 110)

room.book1 = room.createObject("book1", "책2-1.png")
room.book1.setWidth(90)
room.locateObject(room.book1, 190, 125)

room.book2 = room.createObject("book2", "책3-1.png")
room.book2.setWidth(80)
room.locateObject(room.book2, 145, 130)

room.book3 = room.createObject("book3", "책3-1.png")
room.book3.setWidth(80)
room.locateObject(room.book3, 100, 140)

room.cupboard = room.createObject("cupboard","찬장-1-닫힘.png")
room.cupboard.setWidth(230)
room.locateObject(room.cupboard, 420, 290)
room.cupboard.lock()

room.note0 = room.createObject("note0","노트.png")
room.note0.setWidth(42)
room.locateObject(room.note0, 400, 115)
room.note0.onClick = function(){
	showImageViewer("쪽지.png","")
	printMessage("선반위에서 의문의 쪽지를 하나 찾았다.")
}

room.note1 = room.createObject("note1","메모.png")
room.note1.setWidth(32)
room.locateObject(room.note1, 480, 220)
room.note1.hide()
room.note1.onClick = function(){
	showImageViewer("일과표.png","")
}

room.cupboard.onClick = function() {
	if(game.getHandItem() == room.screwdriver) {
		room.cupboard.open()
		printMessage("찬장이 열렸다")
	}
	else if(game.getHandItem() == room.key) {
		printMessage("열쇠구멍은 찾을 수가 없다.")
	}
	else{ 
		printMessage("나사같은 것으로 잠겨져 있는듯하다.")
	}
}

room.cupboard.onOpen = function(){
	room.cupboard.setSprite("찬장-1-열림.png")
	room.note1.show()
}


room.cabinet = room.createObject("cabinet","캐비닛2-1-닫힘.png")
room.cabinet.setWidth(90)
room.locateObject(room.cabinet, 170, 320)
room.cabinet.lock()

room.handle = room.createObject("handle","드라이버손잡이.png")
room.handle.setWidth(25)
room.locateObject(room.handle, 150, 250)
room.handle.hide()
room.handle.onClick = function(){
	room.handle.pick()
	printMessage("캐비닛에서 드라이버 손잡이를 찾았다.")
}


room.head = room.createObject("head","드라이버비트.png")
room.head.setWidth(30)
room.locateObject(room.head, 340, 130)
room.head.onClick = function(){
	room.head.pick()
	printMessage("선반 위에서 드라이버 비트를 찾았다.")
}

room.screwdriver = room.createObject("screwdriver","드라이버.png")
room.screwdriver.hide()
game.makeCombination(room.head, room.handle, room.screwdriver)

room.cabinet.onClick = function(){
	if(game.getHandItem() == room.key) {
		room.cabinet.open()
		printMessage("캐비닛이 열렸다")
	}
	else {
		printMessage("캐비닛이 잠겨있다")
	}
}

room.cabinet.onOpen = function(){
	room.cabinet.setSprite("캐비닛2-1-열림.png")
	room.handle.show()
}

room.stand1 = room.createObject("stand1","스탠드.png")
room.stand1.setWidth(70)
room.locateObject(room.stand1, 270, 325)

room.key = room.createObject("key","열쇠.png")
room.key.setWidth(30)
room.locateObject(room.key, 700, 420)

room.stand2 = room.createObject("stand2","스탠드.png")
room.stand2.setWidth(70)
room.locateObject(room.stand2, 700, 310)



room.key.onClick = function(){
	room.key.pick()
	printMessage("스탠드 밑에 숨겨진 열쇠를 찾았다.")
}

room.carpet = room.createObject("carpet","카펫-1.png")
room.carpet.setWidth(900)
room.locateObject(room.carpet, 600, 550)

room.carpet.onClick=function(){
	printMessage("카펫 밑에는 아무것도 없는 것 같다")
} 

room.deco = room.createObject("deco","장식1-우.png")
room.deco.setWidth(150)
room.locateObject(room.deco, 750, 100)

room.clock = room.createObject("clock", "시계.png")
room.clock.setWidth(50)
room.locateObject(room.clock, 930, 190)
room.clock.onClick = function(){
	printMessage("시계는 전혀 맞지 않는 것 같다.")
}

room.speaker = room.createObject("speaker", "벽스피커-오른쪽.png")
room.speaker.setWidth(80)
room.locateObject(room.speaker, 600, 100)
room.speaker.onClick = function(){
	printMessage("작동은 하는 거 같으나 아무 소리도 들리지 않는다.")
}


game.start(room) 
printMessage("단서를 활용하여 방을 탈출하세요")