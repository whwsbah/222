from os import path
from pathlib import Path

from flask import Flask, render_template
from flask_frozen import Freezer

template_folder = path.abspath('./wiki')

app = Flask(__name__, template_folder=template_folder)

@app.route('/')
def index():
    return render_template('pages/index.html')

@app.route('/<page>')
def pages(page):
    return render_template(str(Path('pages')) + '/' + page.lower() + '.html')

if __name__ == "__main__":
    app.run()
