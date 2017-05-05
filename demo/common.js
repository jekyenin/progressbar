var progressBarOptions = {
		place: 'body',
	},
	progress,
	buttons = {
		create: document.querySelector( '#create' ),
		show: document.querySelector( '#show' ),
		hide: document.querySelector( '#hide' ),
		update: document.querySelector( '#update' ),
		sub: document.querySelector( '#sub' ),
		add: document.querySelector( '#add' )
	},
	codes = document.querySelectorAll('.code'),
	code;

buttons.create.addEventListener( 'click', create, false );
buttons.show.addEventListener( 'click', show, false );
buttons.hide.addEventListener( 'click', hide, false );
buttons.update.addEventListener( 'click', update, false );
buttons.sub.addEventListener( 'click', sub, false );
buttons.add.addEventListener( 'click', add, false );

function create(){
	if( progress ){
		return;
	}
	progress = new ProgressBar( progressBarOptions );
}
function show(){
	progress.show();
}
function hide(){
	progress.hide();
}
function update( val ){
	if( typeof val != 'number' || val === undefined ){
		val = random( 0, 100 );
	}
	progress.value( val );
}
function random(min, max){
	return Math.round( Math.random() * ( max - min ) + min );
}
function sub(){	
	update( progress.value() - 5 );
}
function add(){	
	update( progress.value() + 5 );
}
for(var i = 0, length = codes.length; i < length; i++){
	code = codes[i];
	code.innerHTML = Syntax(code.innerHTML);
}