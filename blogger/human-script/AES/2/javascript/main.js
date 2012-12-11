$(document).ready(function(){
	cryptographyManager.init();
});

var cryptographyManager = (function(){
	var $input, $output, $password, $encrypt, $decrypt, $table;
	
	function init(){
		createElements();
		attachEvents();
	}
	function createTextarea(id){
		return $('<textarea>').attr({id: id}).css({'vertical-align':'middle',height:'100%',width:'100%'});
	}
	function createTableRows(elementsToAppend,includeHeightStyle){
		var cssStyles = {padding:'20px 0'};
		if(includeHeightStyle){
			cssStyles.height = '50%';
		}
		return $('<tr></tr>').append($('<td></td>').css(cssStyles).append(elementsToAppend));
	}
	function createElements(){
	 	$input = createTextarea('inputBox');
	 	$output = createTextarea('outputBox');
		$password = $('<input>').attr({id:'tbPassword',type: 'password'});
		$encrypt = $('<input>').attr({id:'encryptPassword',type: 'button',value:'Encrypt'});
		$decrypt = $('<input>').attr({id:'decryptPassword',type: 'button',value:'Decrypt'});
		$table = $('<table></table>').attr({'cellspacing': 0}).css({'height':'100%',width:'100%'}).appendTo($('.container'));

		var rows = []
		
		rows.push(createTableRows($input,true));
		rows.push(createTableRows([$password,$encrypt,$decrypt]));
		rows.push(createTableRows($output,true));
		$table.append(rows);	
	};

	function attachEvents(){
		$encrypt.on('click',function(){
			var encodedText = Aes.Ctr.encrypt($input.val(),$password.val(),256);
			$output.val(encodedText);
		});

		$decrypt.on('click',function(){
			var decodedText = Aes.Ctr.decrypt($input.val(),$password.val(),256);;
			$output.val(decodedText);
		});
	}

	return{
		init: init
	}

})();