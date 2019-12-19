window.onload = function() {
	$("#cabecalho").show();
	$("#rodape").show();
	$("#cadastro_eventos").hide();
}

function home() {
	$("#inicial").hide();
	$("#cadastroTrab").hide();
	$("#cabecalho").show();
	$("#cadastro_eventos").show();
	$("#btnVoltar").show();
}

function insereEvento() {
	var dados = new FormData();

	dados.append('nome_evento', $("#nome_evento").val());
	dados.append('data_evento', $("#data_evento").val());
	dados.append('hora_in', $("#hora_in").val());
	dados.append('hora_ter', $("#hora_ter").val());

	$.ajax({
		//url: 'http://localhost/servidor/insereEvento.php',
		url:'http://abridgeable-relief.000webhostapp.com/servidor/insereEvento.php',
		method: 'post',
		data: dados,
		processData: false,
		contentType: false,
		success: function(r){
			if(r.Resp == 0){
				window.alert("Evento não salvo!");	
			}
			if (r.Resp == 1) {
				window.alert("Evento salvo!");
				localStorage.clear();
				$("#cabecalho").show();
				$("#inicial").show();
				$("#cadastro_eventos").hide();	
			}
		},
		error: function(xhr, status, error) {
  			alert(xhr.responseText);
		}

	})
	
}

function listarEventos() {
	alert("Página em Construção, volte depois de um tempo! :-)")
	/*$("#inicial").hide();
	$("#cabecalho").show();
	$("#btnVoltar").show();

	$.ajax({
		url:'http://localhost/servidor/consultaEventos.php',
		dataType:'json',
		type:'POST',

		data:{},

		success: function(r) {
			var total = r.length;
			var i ;
			var eventos = "";

			localStorage.setItem('Nome do Evento',r.nome_evento);
			localStorage.setItem('Data do Evento',r.data);
			localStorage.setItem('Hora de Início',r.hora_in);
			localStorage.setItem('Hora de Término',r.hora_ter);
			
			for (i = 0; i<total; i++) {
					eventos+= "<br><br>";
					
					eventos+="<div style='width:100%;text-align:center;margin-top:10px' > Nome do Evento: "+r[i].nome_evento + "</div>" ;
					eventos+="<div style='width:100%;text-align:center;margin-top:10px' > Data do Evento:  "+r[i].data_evento  + "</div>";
					eventos+="<div style='width:100%;text-align:center;margin-top:10px' >Hora Início: "+r[i].hora_in + "</div>";
					eventos+="<div style='width:100%;text-align:center;margin-top:10px' >Hora de Término: "+r[i].hora_ter + "</div>";
					$("#eventos").html(eventos);
				}		
				},
		error: function(e) {
				navigator.notification.alert('Houve um erro de conexão de banco de dados!!','','Erro');	
				}
	})*/
}

function sair() {
		navigator.notification.confirm(
			'Deseja sair',
				respostaSair,
				'Sair',
				['Não','Sim']);
}

function respostaSair(r) {
	if (r==1) {
		localStorage.clear();
		$("#eventos").hide();	
		$("#cadastro_eventos").hide();
		$("#cabecalho").show();
		$("#inicial").show();
	}
}
function Voltar() {
		localStorage.clear();
		$("#inicial").show();
		$("#eventos").hide();	
		$("#cadastro_eventos").hide();
		$("#cabecalho").show();
		$("#inicial").show();
}
