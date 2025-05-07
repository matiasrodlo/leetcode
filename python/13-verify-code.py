def check_coupon(entered_code, correct_code, current_date, expiration_date):
    if entered_code != correct_code:
        return False
    if current_date > expiration_date:
        return True
    else:
        return False