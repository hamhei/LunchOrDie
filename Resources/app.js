Titanium.UI.setBackgroundColor('#FFF');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


var PINK = '#FF4E54';
var GREEN = "#00dd00";
var RED = '#dd0000';
var YELLOW = '#dddd00';

var statusList = [
	{
		status: "●",
		color: GREEN
	},
	{
		status: "▲",
		color: YELLOW
	},
	{
		status: "×",
		color: RED
	},

];

var shops = [
 	{
    name: "マルイチベーグル",
    days: "03456",
    time_open: 660,
    time_close: 1080,
    category: "ベーグル",
  },
  {
    name: "利庵",
    days: "03456",
    time_open: 690,
    time_close: 1080,//わからん
    category: "そば",
  },

  {
    name: "バーガーマニア",
    days: "0123456",
    time_open: 690,
    time_close: 960,
    category: "ハンバーガー",
  },
  {
    name: "手打そば佶更",
    days: "013456",
    time_open: 720,
    time_close: 840,
    category: "そば",
  },

  {
    name: "バンブー",
    days: "0123456",
    time_open: 690,//わからん
    time_close: 960,//わからん
    category: "ホテルラウンジ",
  },
  {
    name: "shirogame imakara",
    days: "0123456",
    time_open: 690,
    time_close: 960,//わからん
    category: "定食、ダイニング",
  },

  {
    name: "とんかつ すずき",
    days: "123456",
    time_open: 690,
    time_close: 960,//わからん
    category: "とんかつ",
  },
  {
    name: "てっぱんやき むー",
    days: "2345",
    time_open: 720,
    time_close: 810,
    category: "ステーキ、鉄板焼き",
  },
  {
    name: "タイダイニング　ソイ7",
    days: "0123456",
    time_open: 690,
    time_close: 900,
    category: "タイ料理、タイカレー",
  },
  {
    name: "馳走 麹屋 ",
    days: "123456",
    time_open: 690,
    time_close: 840,
    category: "和食",
  },

  {
    name: "デニッシュカフェ 白金台店",
    days: "0123456",
    time_open: 660,
    time_close: 900,
    category: "パキスタン料理、カレー",
  },
  {
    name: "PER REGALO",
    days: "2345",
    time_open: 660,
    time_close: 870,
    category: "ピザ、イタリアンブッフェ",
  },
  {
    name: "あかね食堂　芳月堂",
    days: "123456",
    time_open: 690,
    time_close: 900,
    category: "ダイニングバー",
	url: "http://r.tabelog.com/tokyo/A1316/A131602/13109917/",
  },
  {
    name: "CAFE JOY",
    days: "12345",
    time_open: 675,
    time_close: 1200,
    category: "カフェ、欧風カレー",
    url: "http://r.tabelog.com/tokyo/A1316/A131602/13053385/",
  },
  {
    name: "韓国家庭料理 はな 白金店",
    days: "123456",
    time_open: 690,
    time_close: 840,
    category: "韓国料理",
    url: "http://r.tabelog.com/tokyo/A1316/A131602/13037615/",
  },



];




// 今の日時の取得
  var today = new Date();
//今日が何曜日か
  var week = new Array("日", "月", "火", "水", "木", "金", "土");
  var dayOfWeek = week[today.getDay()];
//今の分
var time_now = (today.getHours())*60 + today.getMinutes();

  
//各お店のステータスを調べる
function checkOpen(shop){
  var open_status = 2;
    //今日やってるかどうか
    if (shop.days.indexOf("" + today.getDay()) != -1) {
      //かつ、今の時間やってるかどうか
      if (shop.time_open < time_now && time_now < shop.time_close){
        open_status = 0;
        if ((shop.time_close - time_now) < 60) {
        open_status = 1;
        }
      }
    }

  return open_status;
}

  
//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Just A Lunch',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var data = [];

var row = Ti.UI.createTableViewRow({
	height: 44,
	width: '100%',
	left: 0,
	title: "Open Now!",
	textAlign: "center",
	color: "#fffffff",
	backgroundColor: statusList[0].color
});
data.push(row);

for (var i = 0; i < shops.length; i++) {
	/*if(i == 3){
		var row = Ti.UI.createTableViewRow({
			height: 44,
			width: '100%',
			left: 0,
			title: "Attention!",
			textAlign: "center",
			color: "#fffffff",
			backgroundColor: statusList[1].color
			//layout: 'horizontal'
		});
		data.push(row);
	} else if (i == 5){				
		var row = Ti.UI.createTableViewRow({
			height: 44,
			width: '100%',
			left: 0,
			title: "Closed...",
			textAlign: "center",
			color: "#fffffff",
			backgroundColor: statusList[2].color
			//layout: 'horizontal'
		});
		data.push(row);
	}*/
	var row = Ti.UI.createTableViewRow({
		height: 88,
		width: '100%',
		left: 0,
		//layout: 'horizontal'
	});
	
	var nameLabel = Ti.UI.createLabel({
		text: shops[i].name,
		left: '3%',
		top: '25%',
		width: '50%',
		height: 44,
		font:{fontWeight:'bold', fontSize:16},
		color: '#000000'
	});
	
	row.add(nameLabel);
	var categoryLabel = Ti.UI.createLabel({
		text: shops[i].category,
		left: '3%',
		top: '3%',
		width: '50%',
		height: 44,
		font:{fontWeight:'bold',fontSize:12},
		color: '#999999'
	});
	row.add(categoryLabel);
	var lost_hour = parseInt((shops[i].time_close - time_now)/60); 
	var lost_minit = (shops[i].time_close - time_now)%60; 
	var commentLabel = Ti.UI.createLabel({
		text: "あと" + lost_hour + "時間" + lost_minit + "分",
		left: '50%',//'2%',
		width: '30%',
		height: 44,
		font:{fontWeight:'bold',fontSize:12},
		color: '#999999'
	});
	row.add(commentLabel);
	var open_status = checkOpen(shops[i]);
	var statusLabel = Ti.UI.createLabel({
		
		text: statusList[open_status].status,
		color: statusList[open_status].color,
		right: '0%',
		width: '10%',
		height: 44,
		font:{fontWeight:'bold',fontSize:16},
	});
	row.add(statusLabel);

	data.push(row);
}



var tableMenu = Ti.UI.createTableView({
	data: data,
	width: '100%',
	left: 0,
	style:Ti.UI.iPhone.TableViewStyle.PLAIN,
	separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
	id: 'tableMenu'
});

tableMenu.addEventListener('click', function(e){
});
win1.add(tableMenu);



//
//  add tabs
//
win1.hideTabBar();
tabGroup.addTab(tab1);  


// open tab group
tabGroup.open();
