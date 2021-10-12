from pandas.core.dtypes.missing import isnull


contador = 0
with open('CSVS\income_per_person_gdppercapita_ppp_inflation_adjusted.csv', 'r') as texto:
    lista = []
    for linea in texto:
        lista.append(linea)
        contador += 1
lista.pop(0)
lista_final = []
for item in lista:
    strip = item.strip('\n')
    list_pais = strip.split(',')
    lista_final.append(list_pais)

list_primero_ultimo = []

for j in range(0, len(lista_final)):
    for i in range(0, len(lista_final[j])):
        if lista_final[j][i] == '':
            lista_final[j][i] = 0

list_pasajera = []

for item in lista_final:
    pais = item.pop(0)
    list_pasajera.append(pais)
    dato = item.pop(219)
    dato_bueno = dato.replace("k", '00')
    dato_final = dato_bueno.replace('.', '')
    list_pasajera.append(int(dato_final))
    list_primero_ultimo.append(list_pasajera)
    list_pasajera = []

print(list_primero_ultimo)


mayor = 0
menor = 1000000
for item in list_primero_ultimo:
    if mayor >= item[1] >= menor:
        pass
    elif item[1] > mayor:
        mayor = item[1]
    elif item[1] < menor:
        menor = item[1]

print(menor, mayor)
