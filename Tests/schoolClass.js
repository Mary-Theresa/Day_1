(function(){
  'use strict';

var Register = require('../Apps/schoolClass.js');
var Teacher = require('../Apps/schoolClass.js');
var Student = require('../Apps/schoolClass.js');
  describe("Create a Register Class", function() {
    var staff = new Register('Ken', 'Agbim', '2015')
    it("The register should be a type of object", function() {
      expect(typeof staff).toEqual(typeof {});
    });
  });

  describe("Create the Teacher and Student Classes to Inherit from Register Class", function() {  
    var teacher  = new Teacher('Emmanuel', 'Adeboye', '2007', 'Arts');
    it("The teacher class should be an instance of the register class", function() {
      expect(teacher instanceof Register).toBeTruthy();
    });

    var student  = new Student('Afolabi', 'Jombo', '2014', 'Grade 9');
    it("The student class should be an instance of the register class", function() {
      expect(student instanceof Register).toBeTruthy();
    });
  });
  
  describe("Check the Properties of the Register Class", function() {  
    var member  = new Register('Abiodun', 'Akinoso', '2012');  
    it("The firstName should be a property of the class", function() {
      expect(member.firstName).toBe('Abiodun');
    });

    it("The lastName should be a property of the class", function() {
      expect(member.lastName).toBe('Akinoso');
    });

    it("The regYear should be a property of the class", function() {
      expect(member.regYear).toBe('2012');
    });
  });


  describe("Check the Properties and Methods of the Student Class", function() {  
    var student  = new Student('Afolabi', 'Jombo', '2014', 'Grade 9');    
    it("The grade should be a property of the class", function() {
      expect(student.grade).toBe('Grade 9');
    });
  });

    
})();