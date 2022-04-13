const chai = require('chai')
, assert = chai.assert
, expect = chai.expect
, should = chai.should()

//descrive.skip to skip a particular describe
//descrive.only to run only a particular describe
describe('Name of the feature to be tested', function(){
    //describe is the test suite as it contains the collection of tests related to a functionality
    before(function(){
        //runs once before the first test in this block
        console.log('before hook')
    })

    after(function(){
        //runs once after  the first test in this block
        console.log('after  hook')
    })

    beforeEach(function(){
        //runs once before each test in this block
        console.log('beforeEach hook')
    })

    afterEach(function(){
        //runs once after each test in this block
        console.log('afterEach hook')
    })

    let name = 'John'
    it('Should be a type of string', function(){
        //Individual test
        name.should.be.a('string')
        expect(name).to.be.a('string')
        assert.typeOf(name, 'string')
    })
    //it.skip to skip the test 
    //it.only to run only this test
    it('Should contain John', function(){
        name.should.not.equal('Kate')
        name.should.equal('John')
        expect(name).to.equal('John')
        assert.equal(name, 'John')
    })
})

//Run command npx mocha  in terminal to execute the code 

//Mocha has 4 hooks -> before, after, beforeEach and afterEach
