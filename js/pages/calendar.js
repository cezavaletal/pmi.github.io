
// events declaration using momentjs
var today = moment().format('YYYY-MM-DD'),
	in2days = moment(today).add(2, 'days').format('YYYY-MM-DD'),
	in7days = moment(today).add(7, 'days').format('YYYY-MM-DD'),
	thereis3days = moment(today).subtract(3, 'days').format('YYYY-MM-DD'),
	thereis6days = moment(today).subtract(6, 'days').format('YYYY-MM-DD');

var teslameeting = moment(today + 'T08:00:00'),
	peugeotmeeting = moment(today + 'T17:00:00'),
	toyotameeting = moment(in2days + 'T14:00:00'),
	fiatmeeting = moment(in7days + 'T16:00:00'),
	brunch = moment(thereis6days + 'T10:30:00'),
	lunch = moment(thereis6days + 'T19:30:00');
	party = moment(thereis6days + 'T21:00:00');
	other = moment(thereis6days + 'T23:00:00');


$('#calendar').fullCalendar({
	monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
	monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
	dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
	dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],


	header: {
		left: 'prev,next,today',
		center: 'title',
		right: 'listDay,listWeek,month'
	},


	// customize the button names,
	// otherwise they'd all just say "list"
	views: {
		listDay: { buttonText: 'Días' },
		listWeek: { buttonText: 'Semanas' },
		month: { buttonText: 'Meses' },
		today: { buttonText: 'Hoy' },
	},

	defaultView: 'month',
	defaultDate: today,
	navLinks: true, // can click day/week names to navigate views
	editable: true,
	eventLimit: true, // allow "more" link when too many events
	events: [
		{
			title: 'Reunion de Voluntarios!',
			start: thereis6days,
			color: '#ff3860'
		},

		{
			title: 'Conferencia PMI Piura',
			start: thereis3days,
			color: '#3273dc'
		},
		{
			title: 'Reunion de Directiva',
			start: teslameeting,
			color: '#3273dc'
		},
		{
			title: 'Capacitacion',
			start: peugeotmeeting,
			color: '#3273dc'
		},
		{
			title: 'Convocatoria',
			start: toyotameeting,
			color: '#3273dc'
		},
		{
			title: 'Integracion',
			start: fiatmeeting,
			color: '#3273dc'
		}
	]
});
