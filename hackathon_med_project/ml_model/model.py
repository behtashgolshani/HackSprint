import pandas as pd
import numpy as np
import sklearn as sk
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from sklearn_porter import Porter

data = pd.read_csv("framingham.csv")
data.head()
x_vals = data.loc[:,['age', 'sysBP']]
y_vals = data.loc[:, 'TenYearCHD']
train_x, test_x, train_y, test_y = train_test_split(x_vals, y_vals, random_state=1, test_size = 0.3)
scaler = MinMaxScaler()
train_x = scaler.fit_transform(train_x)
test_x = scaler.fit_transform(test_x)
model = RandomForestClassifier(n_estimators=200, random_state=0, max_depth=12)
model.fit(train_x, train_y)

porter = Porter(model, language='JS')
output = porter.export(embed_data=True)
print(output)


"""
predicted = model.predict(test_x)
conf_mat = confusion_matrix(test_y, predicted)
model_acc = accuracy_score(test_y, predicted)
model_acc
"""