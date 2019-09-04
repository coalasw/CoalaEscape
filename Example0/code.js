room = game.createRoom("room", "office2_.png"); // 방 생성

//room.setRoomLight(0.01);
//방 밝기 조절 0~1

room.picture = room.createObject("picture", "Wall_picture-se.png");
room.picture.setWidth(230);
room.locateObject(room.picture, 180, 210);
room.picture.onClick = function() {
	printMessage("평범한 그림이다."); // 메시지 출력
}

room.clock = room.createObject("clock", "wallclock2-sw.png");
room.clock.setWidth(110);
room.locateObject(room.clock, 757, 86);
room.clock.onClick = function() {
	printMessage("시계는 멈춰 있어.");
	playSound("Alarm01.wav"); // 소리 출력
}

room.carpet = room.createObject("carpet", "carpet.png");
room.carpet.setWidth(366);
room.locateObject(room.carpet, 825, 590);
room.carpet.onClick = function() {
	printMessage("카펫 아래를 뒤져봤지만 아무 것도 없다.");
}

room.desk = room.createObject("desk", "cornerTable.png");
room.desk.setWidth(560);
room.locateObject(room.desk, 620, 300);
room.desk.onClick = function() {
	printMessage("누군가가 여기서 일을 한 흔적이 있다.");
}

room.keypad2 = room.createObject("keypad2", "keypad2-sw.png");
room.keypad2.setWidth(36);
room.locateObject(room.keypad2, 935, 250);
room.keypad2.onClick = function() {
	printMessage("문을 열 수 있는 비밀번호가 필요해.");
	showKeypad(1, "7096" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock();
		printMessage("잠금장치가 열리는 소리가 들렸다.");
	 });
}

room.door = room.createObject("door", "MetalDoor-SW-Close.png");
room.door.setWidth(136);
room.locateObject(room.door, 1030, 300);
room.door.lock();
room.door.onUnlock = function() {
	room.door.open();
	room.door.setSprite("MetalDoor-SW-Open.png");
	printMessage("철컥 하는 소리와 함께 문이 열렸다!");
}

room.door.onClick = function(){
	if(room.door.isOpened()){
		game.clear();
	} else {
		printMessage("문은 잠겨있다.");
	}
}

room.keypad1 = room.createObject("keypad1", "keypad2-se.png");
room.keypad1.setWidth(36);
room.locateObject(room.keypad1, 374, 228);
room.keypad1.onClick = function() {
	printMessage("비밀번호를 찾으면 단서가 나올지도 몰라.");
	showKeypad(2, "CHICK", function(){ // 키패드 2 - 알파벳 5자리
		room.drawer.unlock();
		printMessage("잠금장치가 열리는 소리가 들렸다.");
	 });
}

room.window = room.createObject("window", "Black_window(closed)-se.png");
room.window.setWidth(150);
room.locateObject(room.window, 475, 125);
room.window.onClick = function() {
	printMessage("창문은 잠겨 있어. 열 방법이 없을까?");
}

room.chair = room.createObject("chair", "chair2-nw.png");
room.chair.setWidth(107);
room.locateObject(room.chair, 614, 340);
room.chair.onClick = function() {
	printMessage("딱딱해 보이는 의자다.");
}

room.bookshelf = room.createObject("bookshelf", "Book_shelf-sw.png");
room.bookshelf.setWidth(210);
room.locateObject(room.bookshelf, 1010, 300);
room.bookshelf.move = 0;

room.bookshelf.onDrag = function(direction){ // 드래그 모션 direction - Up, Down, Left, Right
	if(direction == "Right" && room.bookshelf.move == 0){
		game.printMessage("책장을 밀어버렸다!");
		room.bookshelf.moveX(200);
		room.bookshelf.moveY(100);
		room.bookshelf.move = 1;
	} else {
		printMessage("무수히 많은 책이 꽂혀 있다.");
	}
}

room.note = room.createObject("note", "notepad.png");
room.note.setWidth(100);
room.locateObject(room.note, 541, 254);
room.note.onClick = function() {
	showImageViewer("chicken.png", ""); // 이미지만 출력
	printMessage("닭 그림이 그려져 있어.");
}

room.monitor = room.createObject("monitor", "monitor+keyboard-sw.png");
room.monitor.setWidth(98);
room.locateObject(room.monitor, 690, 210);
room.monitor.onClick = function() {
	showVideoPlayer("Wildlife.wmv"); // 비디오 플레이어
	//showVideoPlayer("PUZZLE.mp4");
	printMessage("영상을 재생시켜 보자.");
}

room.radio = room.createObject("radio", "radio-sw.png");
room.radio.setWidth(90);
room.locateObject(room.radio, 830, 255);
room.radio.onClick = function() {
	showAudioPlayer("chick.wav"); // 오디오 플레이어
	printMessage("이게 단서가 될 지도 몰라.");
}

room.drawer = room.createObject("drawer", "drawer3-se-0.png");
room.drawer.setWidth(285);
room.locateObject(room.drawer, 325, 435);
room.drawer.lock();
room.drawer.onClick = function() {
	if(!room.drawer.isLocked()){	
		if(room.drawer.isOpened()){
			room.drawer.close();
			room.drawer.setSprite("drawer3-se-0.png");
			room.key.hide();		
		} else if (room.drawer.isClosed()){
			room.drawer.open();
			room.drawer.setSprite("drawer3-se-2.png");
			room.key.show();
		}
	} else {
		game.printMessage("열리지 않는다.");
	}
}

room.safe = room.createObject("safe", "safe2-se-close.png");
room.safe.setWidth(210);
room.locateObject(room.safe, 170, 465);
room.safe.onClick = function(){	
	if(game.getHandsItemName()=="key"){ // 손에 들고 있는 아이템 이름 가져 옴
		if(room.safe.isClosed()){
			room.safe.setSprite("safe2-se-open.png");
			room.post.show();
			room.safe.open();
		} else if (room.safe.isOpened()){
			room.safe.setSprite("safe2-se-close.png");
			room.post.hide();
			room.safe.close();
		}
	} else {
		printMessage("열쇠를 손에 들고 열어보자.");
	}
}

room.box2 = room.createObject("box2", "Box(Closed)-sw.png");
room.box2.setWidth(110);
room.locateObject(room.box2, 315, 325);

room.box2.onClick = function() {
	game.printMessage("별거 없는데..?");
	if(room.box2.isOpened()){
		room.box2.close();	
	} else if (room.box2.isClosed()){
		room.box2.open();
	}
}
room.box2.onOpen = function() {
	room.box2.setSprite("Box(Opened)-sw.png");
}
room.box2.onClose = function() {
	room.box2.setSprite("Box(Closed)-sw.png");	
}

room.key = room.createObject("key", "key.png");
room.key.setWidth(50);
room.locateObject(room.key, 370, 464);
room.key.hide();

room.key.onClick = function() {
	room.key.pick(); // pick하면 아이템이 인벤토리로 이동
	printMessage("열쇠를 얻었다!");
}

room.post = room.createObject("post", "post-it.png");
room.post.setWidth(30);
room.locateObject(room.post, 193, 465);
room.post.hide();
room.post.onClick = function() {
	showImageViewer("paper.png", "hello.txt"); // 이미지와 텍스트 출력
	printMessage("수수께끼를 풀면 무언가 단서가 될 거야.");
}

room.keypad3 = room.createObject("keypad3", "keypad2-se.png");
room.keypad3.setWidth(36);
room.locateObject(room.keypad3, 374, 70);
room.keypad3.onClick = function() {
	printMessage("올해는?");
	showKeypad(3, "2019", function(){ // 키패드 3 - 전화기패드 숫자 여러자리
		printMessage("정답!!");
	 });
}

room.pen = room.createObject("pen", "pen-open.png");
room.pen.setWidth(50);
room.locateObject(room.pen, 400, 600);
room.pen.onClick = function() {
	room.pen.pick();
	printMessage("펜을 주웠다. 분해할 수 있을 것만 같다.");
}

room.pen2 = room.createObject("pen2", "pen-empty.png");
room.pen2.setItemDescription("펜에서 펜심을 분리한 상태이다."); // 아이템 Observe시 메시지로 설명 출력
room.pen2.hide();
room.pen3 = room.createObject("pen3", "pen-refill.png");
room.pen3.setItemDescription("펜심이다. 쓸모있어보이지는 않는다.");
room.pen3.hide();

game.makeCombination(room.pen2, room.pen3, room.pen); // 조합분해식 생성

game.start(room); // 게임시작
printMessage("첫 번째 방탈출 게임에 오신 것을 환영합니다!\n단서를 찾아 탈출에 성공하시길 바랍니다!");