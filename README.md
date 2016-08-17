Specs:

  1. The program displays output from the users input.
    * Input example: word
    * Output example: word

  2. The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
    * Input example: 3
    * Output example: 3

  3. The program adds "ay" to single-letter words beginning with a vowel.
    * Input example: I
    * Output example: Iay

  4. For words beginning with a single consonant, move the first consonant to the end and add "ay".
    * Input example: Horse
  Output example: orseHay

  5. For words beginning with "y", treat "y" as a consonant.
    * Input example: yellow
    * Output example: ellowyay

  6. For words beginning with a vowel, add "ay" to the end.
    * Input example: apple
    * Output example: appleay

  7. For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
    * Input example: spray
    * Ouput example: ayspray

  8. If the first consonants include "qu", move the "u" along with the "q".
    * Input example: Quickly
    * Output example: icklyquay

  9. Move the letter "u" with the letter "q" if "q" is one of the first consecutive consonants, even if it is not the first letter.
    * Input example: squeal
    * Output example: ealsquay

  10. For multiple words apply all of these rules to each word and keep the spaces.
    * Input example: this is a sentence
    * Output example: isthay isay aay entencesay

  11. Keep punctuation at the end of the word.
    * Input example: this.
    * Output example: isthay.

  12. Convert a word in pig latin back to plain english.
    * Input example: appleay
    * Output example: apple
