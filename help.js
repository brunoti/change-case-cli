export default `
Outline

Convert string case on your terminal as you want

Tips: 1 - Result string is copied to your clipboard automatically.
      2 - If you don't give any input, input would be your clipboard string automatically.
      (This feature not works in headless environment.)

Usage

To convert case,
    $ change-case input --case=[option]

To set default case,
    $ change-case set [option]

Possible options

upper      u     /    STRING CASE UTILITY FOR CONVERTING
lower      l     /    string case utility for converting
snake      s     /    string_case_utility_for_converting
kebab      k     /    string-case-utility-for-converting
header     h     /    String-Case-Utility-For-Converting
camel      c     /    stringCaseUtilityForConverting
pascal     p     /    StringCaseUtilityForConverting
title      t     /    String Case Utility for Converting
random     r     /    Random!
constant         /    STRING_CASE_UTILITY_FOR_CONVERTING
sentence         /    String case utility for converting

Examples

change-case hello, world! --case=snake
> hello_world

change-case --case=pascal hello, world!
> HelloWorld

change-case -c=snake hello, world!
> hello_world

change-case -c=s hello, world!
> hello_world
`
