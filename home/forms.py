from django import forms

class ContactoForm(forms.Form):
    nombre = forms.CharField(label="Nombre: ")
    apellido = forms.CharField(label="Apellido: ")
    email = forms.EmailField(label="Mail: ", required=True)