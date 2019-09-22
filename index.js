$(document).ready(function(){
	$('.b2').hide();
	 $(".table").slideDown({duration:1000, queue:false});
    $("a").hide().slideDown({ queue: false, duration: 1000 });
    $("a").hide().fadeIn({duration:1000, queue:false});


    $(".tablelist").slideDown({duration:1000, queue:false});
    $(".tablelist").fadeIn({duration:3000, queue:false});
    $("ul").hide().slideDown({ queue: false, duration: 1000 });
    $("ul").hide().fadeIn({duration:2000, queue:false});

});

$(document).ready(function(){
	$('.b3').click(function(){
		$(this).hide();
		$('.r-box').fadeIn(2500);
		$(".table").hide();
		$(".tablelist").hide();
	});
	$('.ques').click(function(){
		$(".table").slideDown({duration:1000, queue:false});
	    $("a").hide().slideDown({ queue: false, duration: 1000 });
	    $("a").hide().fadeIn({duration:1000, queue:false});
	    $('.b3').show();
	    $('.r-box').hide();
	    $(".tablelist").slideDown({duration:1000, queue:false});
	    $(".tablelist").fadeIn({duration:1000, queue:false});
	    $("ul").hide().slideDown({ queue: false, duration: 1000 });
	    $("ul").hide().fadeIn({duration:1000, queue:false});
	})
})
$(document).ready(function(){
	$('.b1').click(function(){
		var n1=$('#n1stn').val();
		var n2=$('#n2ndn').val();
		n1=parseInt(n1);
		n2=parseInt(n2);
		var errorstr="";
		var m=0;
		if(n1>100 || n1<0){
			errorstr+="*1st Number should lie between 0 and 100*<br>";
			m=1;
		}
		if(n2>100 || n2<0){
			errorstr+="*2nd Number should lie between 0 and 100*<br>";
			m=1;
		}
		if(m===0 && (n2-n1)<=10 && (n2-n1)>=0){
			$('.error').html(``);
			var num=(Math.floor(100*Math.random()))+1;
			$('#rnum').val(num);
			$('.b1').hide();
			$('.b2').show();
			
			if(n1<=num && n2>=num){
				$('.r-box').css("background","green");
			}
			else{
				$('.r-box').css("background","red");
			}
		}
		
		else if((n2-n1)<0){
			errorstr+="*1st number should be less than 2nd number*<br>";
			// console.log(errorstr);
		}
		else if((n2-n1)>10){
			errorstr+="*Difference between 1st and 2nd number should not be greater than 10*<br>";
			// console.log(errorstr);
		}
		$('.error').html(`<b>${errorstr}</b>`);
		// console.log(errorstr,n2,n1);





		
		// console.log(num,n1);
	})
});

$(document).ready(function(){
	$('.b2').click(function(){
		$('.r-box').fadeOut(100);
		$('.r-box').fadeIn(500);
		setTimeout(function(){
		$('.b1').show();
		$('.b2').hide();
		$('#n1stn').val("");
		$('#n2ndn').val("");
		$("#rnum").val("");
		$('#n1stn').attr("placeholder","0");
		$('#n2ndn').attr("placeholder","0");
		$('.r-box').css("background","#343a40");
			

		},100);
		

	})
})

$(document).ready(function(){
	$('#n1stn').click(function(){
		$('#n1stn').attr("placeholder","");

	})
})

$(document).ready(function(){
	$('#n2ndn').click(function(){
		$('#n2ndn').attr("placeholder","");

	})
})

$(document).ready(function(){
	$('#n1stn').mouseenter(function(){
		$('#n1stn').attr("placeholder","");

	})
})

$(document).ready(function(){
	$('#n2ndn').mouseenter(function(){
		$('#n2ndn').attr("placeholder","");

	})
})
$(document).ready(function(){
	$('#n1stn').mouseleave(function(){
		$('#n1stn').attr("placeholder","0");

	})
})

$(document).ready(function(){
	$('#n2ndn').mouseleave(function(){
		$('#n2ndn').attr("placeholder","0");

	})
})
