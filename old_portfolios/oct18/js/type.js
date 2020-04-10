var retype = {
	retypePhrases: [
		'a lightning technician.',
		'a web designer.',
		'nice.',
		'a ginger.',
        'a design student.'
	],
	index       : -1,
	elem        : document.getElementById('retype'),
	start       : function(){
		var _this = this;
		setTimeout( function(){
			_this.deleteLetter();
		}, 2000 );
	},
	deleteRepeat: function(){
		this.deleteLetter();
	},
	deleteLetter: function(){
		var newWord = this.elem.innerHTML;
		if( newWord.length > 0 ){
			newWord = newWord.substring(0, newWord.length - 1);
			var _this = this;
			setTimeout( function(){
				_this.elem.innerHTML = newWord;
				_this.deleteRepeat();
			}, 75 );
		}else{
			this.newLetter();
		}
	},
	newRepeat   : function(){
		this.newLetter();
	},
	newLetter   : function(){
		var newWord = this.elem.innerHTML;
		if( newWord.length === 0 ){
			this.index++;
			if( this.index >= this.retypePhrases.length ){
				this.index = 0;
			}
		}
		var newLetters = this.retypePhrases[ this.index ];
		if( newLetters.length > newWord.length ){
			newLetters = newLetters.substring(0, ( newWord.length + 1 ) );
			var _this = this;
			var time = Math.round( Math.random() * 100 ) + 100;
			setTimeout( function(){
				_this.elem.innerHTML = newLetters;
				_this.newLetter();
			}, time );
		}else{
			this.start();
		}
	}
};

retype.start();