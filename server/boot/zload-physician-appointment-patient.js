
module.exports = function(app) {
  var Physician = app.models.Physician;
  var Appointment = app.models.Appointment;
  var Patient = app.models.Patient;

  app.dataSources.db.automigrate('Physician', function(err) {
    if (err) throw err;

    var physicians = [
      {name: 'Physician 1'},
      {name: 'Physician 2'}
      ];

      Physician.create(physicians[0], function(err, instance) {
        if (err) return console.error(err);
        console.log('Physician created: ', instance);
      });

      Physician.create(physicians[1], function(err, instance) {
        if (err) return console.error(err);
        console.log('Physician created:', instance);
      });

    var patients = [
      {name: 'Patient 1'},
      {name: 'Patient 2'},
      {name: 'Patient 3'},
      {name: 'Patient 4'}
    ];

    for(index in patients){

      Patient.create(patients[index], function(err, instance) {
        if (err) return console.error(err);
        console.log('Patient created: ', instance);
      });
    }


    var appointments = [
      {
        patientId : 1,
        physicianId : 1,
        appointmentDate:'2016-01-01'
      },
      {
        patientId : 1,
        physicianId : 2,
        appointmentDate:'2016-02-01'
      },
      {
        patientId : 2,
        physicianId : 1,
        appointmentDate:'2016-01-01'
      },
      {
        patientId : 3,
        physicianId : 1,
        appointmentDate:'2016-01-01'
      },
      {
        patientId : 4,
        physicianId : 2,
        appointmentDate:'2016-01-01'
      }
    ];

    for(index in appointments){

      Appointment.create(appointments[index], function(err, instance) {
        if (err) return console.error(err);
        console.log('Appointment created: ', instance);
      });
    }

  });

  }
