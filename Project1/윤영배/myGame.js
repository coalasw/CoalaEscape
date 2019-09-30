room = game.createRoom("room", "main_room.jpg") // 방 생성
room2 = game.createRoom("room2","garden.jpg")

/*
room.door = room.createObject("door", "door_closed.png") //문 생성
room.door.setWidth(170)
room.locateObject(room.door, 650, 390)
room.door.lock()
*/

room.table = room.createObject("table", "table.png") //테이블 생성
room.table.setWidth(350)
room.locateObject(room.table, 900, 600)

room.loft = room.createObject("loft", "loft.png") // 옥탑밥 생성
room.loft.setWidth(160)
room.locateObject(room.loft, 900, 47)
room.loft.lock() // 옥탑방 잠그기

room.lamp = room.createObject("lamp", "lamp.png") //전등 생성
room.lamp.setWidth(230)
room.locateObject(room.lamp, 720, 130)


room.window = room.createObject("window", "window.png") //창문 생성
room.window.setWidth(300)
room.locateObject(room.window, 450, 250)

room.computer = room.createObject("computer", "computer.png") //컴퓨터 생성
//room.computer.setWidth(200)
room.locateObject(room.computer, 900, 470)


room.usb = room.createObject("usb", "usb.png") //usb 생성
room.usb.setWidth(40)
room.locateObject(room.usb, 350, 630)
room.usb.hide()

room.usb.onClick = function () { //usb클릭 시 획득
    room.usb.pick()
}


room.box = room.createObject("box", "box.png") //상자 생성
room.box.setWidth(250)
room.locateObject(room.box, 600, 600)
room.box.lock()

room.telescope = room.createObject("telescope", "telescope.png") //망원경 생성
room.telescope.setWidth(100)
room.locateObject(room.telescope, 570, 670)
room.telescope.hide()
room2.telescope = room2.createObject("telescope","telescope.png") // room2용 망원경
room2.telescope.hide()

room.telescope.onClick = function () { //망원경 줍기
    room2.telescope.pick()
    room.telescope.hide()
    printMessage("망원경을 주웠다! usb대신 사용해보자")
}

/*
room.book = room.createObject("book", "book.png")
room.locateObject(room.book,920,490)
room.book.setWidth(100)
*/

room.trash = room.createObject("trash", "trash.png") //쓰레기통 생성
room.locateObject(room.trash, 300, 600)
room.trash.setWidth(80)

/*
room.crumblepaper = room.createObject("crumblepaper", "crumblepaper.png") //휴지조각 생성
room.crumblepaper.setWidth(40)
room.locateObject(room.crumblepaper,330,630)
room.crumblepaper.hide()
*/

room2.arrow = room2.createObject("arrow", "arrow.png") //돌아가기 화살표 생성
room2.arrow.setWidth(100)
room2.locateObject(room2.arrow, 700, 650)

room2.sign = room2.createObject("sign", "sign.png") //주소 표지판 생성
room2.sign.setWidth(230)
room2.locateObject(room2.sign, 1050, 510)

room.loft.onClick = function () { // 옥탑방 클릭하면 계단이 나오고 게임 종료
    if (room.loft.isClosed()) {
        room.loft.open()
    }
    else if (room.loft.isOpened()) {
        game.clear()

    }else if (room.loft.isLocked()) { //옥탑방 비밀번호 체크
        printMessage("집의 주소는?")
        showKeypad("number", "8939", function () {
            room.loft.unlock()
            printMessage("옥탑방이 열렸다! 열어보자!")
        })
    }
}

room.loft.onOpen = function () { //계단이 열리는 코드
    room.loft.setSprite("stair.png")
}


room.window.onClick = function () { //창문클릭 시 방2번 출력
    game.move(room2)
}

room2.arrow.onClick = function () { //돌아가기 화살표 클릭
    game.move(room)
}



room.computer.onClick = function () { //컴퓨터 클릭 시
    
    if (game.getHandItem() == room.usb) {
        showImageViewer("clock.png", "");
        printMessage("시계 이미지가 있다..무슨 의미일까")
    } else {
        printMessage("아무 파일도 없다...")
    }
}

room.trash.onClick = function () { //쓰레기통 클릭 시
    showImageViewer("usb.png", "");
    room.usb.show()
    printMessage("USB가 들어있다!")

}



room.box.onClick = function () { // 박스 문제 해결
    printMessage("현재 시간")
    showKeypad("number", "1008", function () {
        room.box.unlock()
        room.telescope.show()
        printMessage("박스가 열렸다!!")
    })
}





/*
room.door.onClick = function(){ //문 클릭에 따라 opend 또는 closed로 상태 변경
    if (room.door.isClosed()) {
        room.door.open()

    } else if (room.door.isOpened()) {
        //room.door.close()
        game.clear()
    } else if(room.door.isLocked()) {
        printMessage("문이 잠겨있다")
    }
}
*/

/*
room.book.onClick = function () {

    showImageViewer("postit.png", "hint.txt");

}
*/


room2.sign.onClick = function () { // 표지판 클릭
    if (game.getHandItem() == room2.telescope) {
        showImageViewer("sign2.png", "");
        printMessage("주소가 잘 보인다...!!")
    } else {
        printMessage("주소 같은데 멀어서 잘 보이지 않는다...")
    }

}

roomLight = true
room.setRoomLight(0.35)

room.lamp.onClick = function () {
        room.setRoomLight(1)
}

game.start(room) // 게임시작


printMessage("너무 어두워서 아무것도 보이지 않는다...")



