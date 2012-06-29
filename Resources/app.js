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

var shops = [];
var shops = [
  {
    name: "千年茶館",
    days: "23456",
    time_open: 720,
    time_close: 900,
  },
  {
    name: "ラ・ボエム",
    days: "0123456",
    time_open: 60,
    time_close: 840,
  },

  {
    name: "鮨匠 岡部",
    days: "12345",
    time_open: 720,
    time_close: 870,
  },


];



// 今の日時の取得
  var today = new Date();
//今日が何曜日か
  var week = new Array("日", "月", "火", "水", "木", "金", "土");
  var dayOfWeek = week[today.getDay()];
  
  
  
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
	if(i == 3){
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
	}
	var row = Ti.UI.createTableViewRow({
		height: 44,
		width: '100%',
		left: 0,
		//layout: 'horizontal'
	});
	
	var nameLabel = Ti.UI.createLabel({
		text: rest[i].name,
		left: '3%',
		width: '45%',
		font:{fontWeight:'bold', fontSize:16},
		color: '#000000'
	});
	row.add(nameLabel);
	
	var commentLabel = Ti.UI.createLabel({
		text: rest[i].comment,
		left: '50%',//'2%',
		width: '40%',
		font:{fontWeight:'bold',fontSize:12},
		color: RED
	});
	row.add(commentLabel);
	
	var statusLabel = Ti.UI.createLabel({
		text: statusList[rest[i].status].status,
		color: statusList[rest[i].status].color,
		right: '0%',
		width: '10%',
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
