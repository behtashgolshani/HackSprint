import pandas as pd
import sklearn as sk
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
import pickle

data = pd.read_csv("framingham.csv")
x_vals = data.loc[:,['age', 'sysBP']]
y_vals = data.loc[:, 'TenYearCHD']
train_x, test_x, train_y, test_y = train_test_split(x_vals, y_vals, random_state=1, test_size = 0.3)
scaler = MinMaxScaler()
train_x = scaler.fit_transform(train_x)
test_x = scaler.fit_transform(test_x)
model = RandomForestClassifier(n_estimators=200, random_state=0, max_depth=12)
model.fit(train_x, train_y)

pickle.dump(model, open('model.pkl', 'wb'))