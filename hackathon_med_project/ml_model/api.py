from flask import Flask, render_template, request
import numpy as np
import pickle

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/', methods=['GET'])
def hello():
    return render_template('form.html')

@app.route('/predictor', methods=['POST'])
def form():
    int_features = [int(x) for x in request.form.values()]
    features = [np.array(int_features)]
    output = model.predict(features)
    return render_template('form.html', prediction = str(bool(output)))

if __name__ == '__main__':
    app.run()