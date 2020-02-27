var num_rifa = "";
			var vendidas = 0;
			var a_venda = 0;
			var reservada = 0;

			var x = -1;
			while (x < total_rifas){
				x++;

				if (rifas["r" + x] == 1){
					vendidas++;
					
					if (x<10){
						num_rifa += '<a href="#two" onClick="alert(`Ops, este número já foi vendido!`)" class="vendida">00' + x + '</a>';
					}else if (x<100){
						num_rifa += '<a href="#two" onClick="alert(`Ops, este número já foi vendido!`)" class="vendida">0' + x + '</a>';
					}else {
						num_rifa += '<a href="#two" onClick="alert(`Ops, este número já foi vendido!`)" class="vendida">' + x + '</a>';
					}

				}else if (rifas["r" + x] == 2){
					a_venda++;
					
					if (x<10){
						num_rifa += '<a target="_blank" href="https://api.whatsapp.com/send?phone=55+11974733703&text=Olá, gostaria de efetuar a compra da rifa de número: ' + x + ' " class="avenda">00' + x + '</a>';
					}else if (x<100){
						num_rifa += '<a target="_blank" href="https://api.whatsapp.com/send?phone=55+11974733703&text=Olá, gostaria de efetuar a compra da rifa de número: ' + x + ' " class="avenda">0' + x + '</a>';
					}else {
						num_rifa += '<a target="_blank" href="https://api.whatsapp.com/send?phone=55+11974733703&text=Olá, gostaria de efetuar a compra da rifa de número: ' + x + ' " class="avenda">' + x + '</a>';
					}

				}else if (rifas["r" + x] == 3){
					reservada++;
					
					if (x<10){
						num_rifa += '<a href="#two" onClick="alert(`Ops, este número já foi reservado!`)" class="reservada">00' + x + '</a>';
					}else if (x<100){
						num_rifa += '<a href="#two" onClick="alert(`Ops, este número já foi reservado!`)" class="reservada">0' + x + '</a>';
					}else {
						num_rifa += '<a href="#two" onClick="alert(`Ops, este número já foi reservado!`)" class="reservada">' + x + '</a>';
					}
					
				}

			}

			document.getElementById("numeros_rifa").innerHTML = num_rifa;

			var config = {
				type: 'pie',
				data: {
					datasets: [{
						data: [
							a_venda,
							vendidas,
							reservada,
						],
						backgroundColor: [
							window.chartColors.green,
							window.chartColors.blue,
							window.chartColors.yellow,
						],
						label: 'Rifas'
					}],
					labels: [
						'Disponível',
						'Vendido',
						'Reservado'
					]
				},
				options: {
					responsive: false
				}
			};
		
			window.onload = function() {
				var ctx = document.getElementById('chart-area').getContext('2d');
				window.myPie = new Chart(ctx, config);
			};
		
			var colorNames = Object.keys(window.chartColors);