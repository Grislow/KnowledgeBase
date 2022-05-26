# Templates for thorough Acceptance Criteria

#### Table of contents

* [How to](#how-to)
* [Bits](#bits)

&nbsp;
# How to
1. Copy + paste to a text editor
1. Multiselect placeholders and replace accordingly
1. Add project specific "flavors"
1. Read once to check for mistakes or missing parts
1. Think about possible refinement of template

&nbsp;
# Bits

## [Data][Entity-Code] Machine friendly and human readable
* trailing spaces removed
* trailing special characters removed
* accented letters translated to closest ASCII compatible representation
* uppercase letter to lower case
* non-trailing and non-leading special characters replaced with a underscore
* adjoining underscores replaced with a single underscore
* if duplicate [OR]:
    * prefix with number incrementally starting from 0 until no duplicate is found
    * postfix with number incrementally starting from 0 until no duplicate is found
    * require manual prefix input
    * require manual postfix input

