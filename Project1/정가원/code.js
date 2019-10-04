room = game.createRoom("room", "office2_.png"); // 방 생성

//room.setRoomLight(0.01);
//방 밝기 조절 0~1


//~고흐의 그림들~

room.picture1 = room.createObject("picture1", "별이 빛나는 밤-1.png");
room.picture1.setWidth(65);
room.locateObject(room.picture1, 175, 210);
room.picture1.onClick = function() {
	showImageViewer("별이 빛나는 밤.png", ""); // 이미지만 출력
	printMessage("재작년 MOMA 미술관에서 본 진품과 아주 유사한걸?"); // 메시지 출력
}
//고흐의 자화상 설정
room.picture2 = room.createObject("picture2", "귀에 붕대를 감은 자화상-1.png");
room.picture2.setWidth(40);
room.locateObject(room.picture2, 230, 180);
room.picture2.lock();
room.picture2.onUnlock = function() {
	room.picture2.open();
}

room.picture2.onClick = function(){	
	if(game.getHandItem()==room.knife){ // 손에 들고 있는 아이템 이름 가져 옴
		room.picture2.open();
		showImageViewer("귀에 붕대를 감은 자화상-2.png", ""); // 이미지만 출력
		printMessage("으악, 뭐야? 무언가 떨어졌다."); // 메시지 출력
		if(room.shelf.move == 1) {room.key.show()}
		
	} else {
		showImageViewer("귀에 붕대를 감은 자화상.png", ""); // 이미지만 출력
		printMessage("호오, 꽤나 고흐의 느낌이 잘 살아있는걸?"); // 메시지 출력
	}
}

room.picture3 = room.createObject("picture3", "파이프를 물고 귀에 붕대를 한 자화상-1.png");
room.picture3.setWidth(40);
room.locateObject(room.picture3, 270, 165);
room.picture3.onClick = function() {
	showImageViewer("파이프를 물고 귀에 붕대를 한 자화상.png", ""); // 이미지만 출력
	printMessage("눈빛이 쓸쓸해 보이네."); // 메시지 출력
}


// 나가는 문 설정
room.door = room.createObject("door", "WoodenDoor-SW-Close.png");
room.door.setWidth(100);
room.locateObject(room.door, 950, 280);
room.door.lock();
room.door.onUnlock = function() {
	room.door.open();
	room.door.setSprite("WoodenDoor-SW-Open.png");
	printMessage("문이 열렸어!");
}

room.door.onClick = function(){
	if(room.door.isOpened()){
		game.clear();
	} else {
		printMessage("문은 잠겨있다.");
	}
}

//번호키 설정
room.keypad1 = room.createObject("keypad1", "keypad2-se.png");
room.keypad1.setWidth(36);
room.locateObject(room.keypad1, 374, 228);
room.keypad1.onClick = function() {
	printMessage("비밀번호가 뭘까?");
	showKeypad("number", "3748", function(){ // 키패드 - 숫자 4자리
		room.door.unlock();
		printMessage("잠금장치가 열리는 소리가 들렸다.");
	 });
}


//창문

room.window = room.createObject("window", "창문.png");
room.window.setWidth(150);
room.locateObject(room.window, 475, 125);
room.window.onClick = function() {
	printMessage("3층 높이인 것 같은데...밖은 온통 풀숲이군.");
}


room.chair = room.createObject("chair", "의자.png");
room.chair.setWidth(107);
room.locateObject(room.chair, 704, 270);
room.chair.onClick = function() {
	printMessage("낡은 나무의자다.");
}

// 책장

room.shelf = room.createObject("shelf", "나무선반.png");
room.shelf.setWidth(120);
room.locateObject(room.shelf, 230, 380);
room.shelf.move = 0;

room.shelf.onDrag = function(direction){ // 드래그 모션 direction - Up, Down, Left, Right
	if(direction == "Left" && room.shelf.move == 0){
		printMessage("책장을 밀어버렸다!");
		room.shelf.moveX(-100);
		room.shelf.moveY(60);
		room.shelf.move = 1;
		if(room.picture2.isOpened()) {room.key.show()}
	} else {
		printMessage("평범해보이는 책장이다.");
	}
}

room.shelf.onClick = function() {
	printMessage("평범해보이는 책장이다.");
}


//보물 비밀상자
room.box1 = room.createObject("box1", "비밀상자.png");
room.box1.setWidth(120);
room.locateObject(room.box1, 780, 350);

room.box1.onClick = function() {
	if(game.getHandItem()==room.key && room.box1.isOpened()){
		room.box1.close();
		room.post.hide();	
	} else if (game.getHandItem()==room.key && room.box1.isClosed()){
		room.box1.open();
		room.post.show();
	}
}
room.box1.onOpen = function() {
	room.box1.setSprite("비밀상자-1.png");
}
room.box1.onClose = function() {
	room.box1.setSprite("비밀상자.png");	
}


//종이상자
room.box2 = room.createObject("box2", "Box(Closed)-sw.png");
room.box2.setWidth(50);
room.locateObject(room.box2, 700, 270);

room.box2.onClick = function() {
	if(room.box2.isOpened()){
		room.box2.close();
		room.leather.hide();	
	} else if (room.box2.isClosed()){
		room.box2.open();
		room.leather.show();
	}
}
room.box2.onOpen = function() {
	room.box2.setSprite("Box(Opened)-sw.png");
}
room.box2.onClose = function() {
	room.box2.setSprite("Box(Closed)-sw.png");	
}

//열쇠
room.key = room.createObject("key", "key.png");
room.key.setWidth(30);
room.locateObject(room.key, 230, 480);
room.key.hide();

room.key.onClick = function() {
	room.key.pick(); // pick하면 아이템이 인벤토리로 이동
	printMessage("열쇠를 얻었다!");
}

//쪽지
room.post = room.createObject("post", "post-it.png");
room.post.setWidth(30);
room.locateObject(room.post, 780, 350);
room.post.hide();
room.post.onClick = function() {
	showImageViewer("paper.png", "hello.txt"); // 이미지와 텍스트 출력
	printMessage("수수께끼를 풀면 무언가 단서가 될 거야.");
}

//편지
room.letter = room.createObject("letter", "편지.png");
room.letter.setWidth(30);
room.locateObject(room.letter, 780, 600);
room.letter.onClick = function() {
	showImageViewer("편지.png", "편지.txt"); // 이미지와 텍스트 출력
	printMessage("고흐가 동생에게 보내는 편지인가?");
}

//칼 만들기
room.glass = room.createObject("glass", "유리조각.png");
room.glass.setWidth(20);
room.locateObject(room.glass, 400, 600);
room.glass.onClick = function() {
	room.glass.pick();
	printMessage("이런 곳에 유리조각이 떨어져있다니, 위험한걸?");
}

room.leather = room.createObject("leather", "찢어진 가죽.png");
room.leather.setWidth(50);
room.locateObject(room.leather, 700, 270);
room.leather.hide();

room.leather.onClick = function() {
		room.leather.pick();
		printMessage("두꺼운 가죽조각이네. 옷수선용인가?");
}


room.glass.setItemDescription("매우 날카로우니 조심히 다뤄야겠군.") // 아이템 Observe시 메시지로 설명 출력

room.leather.setItemDescription("두껍고 튼튼한 가죽조각이다."); // 아이템 Observe시 메시지로 설명 출력


room.knife = room.createObject("knife", "칼.png");
room.leather.setWidth(20);
room.knife.setItemDescription("무언가를 자를 수 있겠군."); // 아이템 Observe시 메시지로 설명 출력
room.knife.hide();

game.makeCombination(room.glass, room.leather, room.knife); // 조합분해식 생성





game.start(room); // 게임시작
printMessage("눈을 떠보니 이상한 곳에 갇혔다.\n여기는 대체 어디지.");