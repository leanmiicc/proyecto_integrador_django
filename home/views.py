from django.shortcuts import render
from django.template import loader
from .forms import ContactoForm
from django.contrib import messages

def home(request):
        return render(request, "home/index.html")
    
def escuela(request):
    return render(request, "home/escuela.html")

def contacto(request):
    if request.method == 'POST':
        contacto_form = ContactoForm(request.POST)
        if contacto_form.is_valid():
            messages.info(request, "Info Importante")
    else:
        contacto_form = ContactoForm()
    return render(request, "home/contacto.html", {'contacto_form': contacto_form})