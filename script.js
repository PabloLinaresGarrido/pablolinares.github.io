function crearReunion() {
	var nombre = document.getElementById("nombre").value;
	var correo = document.getElementById("correo").value;
	var fecha = document.getElementById("fecha").value;
	var hora = document.getElementById("hora").value;

	var reunión = {
		topic: "Reunión con " + nombre,
		type: 2,
		start_time: fecha + "T" + hora + ":00",
		duration: 60,
		timezone: "America/Los_Angeles",
		password: "123456",
		settings: {
			host_video: true,
			participant_video: true,
			join_before_host: true,
			mute_upon_entry: false,
			watermark: false,
			use_pmi: false,
			approval_type: 2,
			audio: "both",
			auto_recording: "cloud",
			waiting_room: false
		}
	};

	ZoomMtg.generateSignature({
		apiKey: 'RlMi8Jw-QoaCvlz8nUWy3A',
		apiSecret: 'siBG9QkIVaw8nGma2vhiiDd9Av9y8ZzZ3pHE',
		meetingNumber: null,
		role: 0,
		success: function(res){
			console.log(res.result);
			reunión.signature = res.result;
			iniciarReunion(reunión);
		}
	});
}

function iniciarReunion(reunión) {
	ZoomMtg.init({
		debug: true,
		showMeetingHeader: true,
		disableInvite: true,
		disableCallOut: true,
		disableRecord: true,
		disableJoinAudio: true,
		audioPanelAlwaysOpen: true,
		videoDrag: true,
		showPureSharingContent: false,
		disableShare: true,
		disableChat: true,
		disableConfidentialWatermark: true
	});

	zoomMeetingParameters = {
		meetingNumber: null,
		userName: reunión.topic,
		signature: reunión.signature,
		apiKey: 'RlMi8Jw-QoaCvlz8nUWy3A',
		userEmail: reunión.correo,
		passWord: reunión.password,
		success: function(res) {
			console.log(res);
		},
		error: function(res) {
			console.log(res);
		}
	};

	ZoomMtg.join(zoomMeetingParameters);
}
