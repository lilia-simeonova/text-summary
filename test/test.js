'use strict';
var expect    = require("chai").expect;

var summarize = require('../app/index.js');
var fs = require('fs');

var text = fs.readFileSync('test/news.txt', 'utf8').toString();
var emptyText = '';
var question = '';

describe("test", function() {
	it("plain summary", function() {
		var summaryNormalText = summarize.summary(text, 4);
		expect(summaryNormalText).to.be.a('string');
	});
	it("summaryNormalTextZeroSentences", function() {
		var summaryNormalTextZeroSentences = summarize.summary(text, 0);
		console.log(summaryNormalTextZeroSentences);
		expect(summaryNormalTextZeroSentences).to.be.a('');
	});
	it("summaryNormalTextEmptyText", function() {
		var summaryNormalTextEmptyText = summarize.summary(emptyText, 4);
		console.log(summaryNormalTextEmptyText);
		expect(summaryNormalTextEmptyText).to.be.a('');
	});
	it("summaryWithQuestion", function() {
		var emptyQuestion = summarize.summaryWithQuestion(question, text, 4);
		expect(emptyQuestion).to.be.a('string');
	});
	it("summaryWithQuestionEmptyText", function() {
		var summaryWithQuestionEmptyText = summarize.summary(question, emptyText, 4);
		expect(summaryWithQuestionEmptyText).to.be.a('');
	});
});


