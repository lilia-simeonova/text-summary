'use strict';

var jaccard = require('jaccard-similarity-sentences');


var getSentencesFromArticle = require('get-sentences-from-article');

exports.summaryWithQuestion = function(question, text, numberSentences) {
	var weigthedSentences = new Array();
	var sentences = getSentencesFromArticle(text);
	if(sentences) {
		for(var i = 0; i < sentences.length; i++) {
				weigthedSentences.push({
						i:i, 
						sentence: sentences[i], 
						weight:jaccard.jaccardSimilarity(question, sentences[i])
					});
			}
			var sortedArray = weigthedSentences.sort(function(a, b) { 
				return b['weight'] - a['weight'];
			});

			var result = '';
			for(var i = 0; i < numberSentences; i++) {
				result = result + sortedArray[i]['sentence'] + ' ';
			}
			return result;
		} else {
			return []
		}
}

exports.summary = function(text, numberSentences) {
	var weigthedSentences = new Array();
	var sentences = getSentencesFromArticle(text);
	if(sentences) {
		for(var i = 0; i < sentences.length; i++) {		
			weigthedSentences.push({
					i:i, 
					sentence: sentences[i], 
					weight: jaccard.jaccardSimilarity(sentences[0], sentences[i])
				});
			}
			var sortedArray = weigthedSentences.sort(function(a, b) { 
				return b['weight'] - a['weight'];
			});

			var result = '';
			for(var i = 0; i < numberSentences; i++) {
				result = result + sortedArray[i]['sentence'] + ' ';
			}
			return result;
	} else {
		return []
	}
}
