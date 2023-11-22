from datetime import datetime, timedelta
import math
import pandas as pd
import holidays

hk_holidays = holidays.country_holidays('HK')

header = [
    'date', 
    'year', 
    'month_num', 
    'month_end_short', 
    'month_end_long', 
    'day_of_month', 
    'day_of_week_num', 
    'day_of_week_eng_short', 
    'day_of_week_eng_long', 
    'quarter', 
    'is_work_day', 
    'is_holiday']
# header = "date,year,month_num,month_end_short,month_end_long,day_of_month,day_of_week_num,day_of_week_eng_short,day_of_week_eng_long,quarter,is_work_day,is_holiday"

day = datetime(2021, 1, 1)

with open('date_time.csv', 'w') as f:
    # f.write(header + "\n")
    f.write(",".join(header) + "\n")
    
    # How do I check hk holiday
    def is_holiday(day, holidays):
        if day.weekday() in [5, 6]:  # Saturday or Sunday
            return True
        elif day in holidays:
            return True
        else:
            return False

    for x in range(365):
        row = "{0},{1},{2},{3},{4},{5},{6},{7},{8},{9},{10},{11}\n".format(
            day.strftime('%Y-%m-%d'),
            day.strftime('%Y'),
            day.strftime('%m'),
            day.strftime('%b'),
            day.strftime('%B'),
            day.strftime('%d'),
            day.strftime('%w'),
            day.strftime('%a'),
            day.strftime('%A'),
            math.ceil(int(day.strftime('%m'))/3),
            str(not is_holiday(day, hk_holidays)),
            str(is_holiday(day, hk_holidays)),
        )
        f.write(row)
        f.flush()
        day = day + timedelta(days=1)

# Read
df = pd.read_csv('date_time.csv')
print(df.head(10))
