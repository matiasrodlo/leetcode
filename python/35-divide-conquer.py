"""
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

"""

def div_con(x):
    number_total = 0
    string_total = 0

    for item in x:
        if isinstance(item, int):
            number_total += item
        else:  # assumes it's a string representation of an integer
            string_total += int(item)
    
    return number_total - string_total
