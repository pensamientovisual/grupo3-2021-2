from pandas.core.dtypes.missing import isnull


contador = 0
with open('CSVS/hapiscore_whr.csv', 'r') as texto:
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
    dato = float(item.pop())
    list_pasajera.append(dato)
    list_primero_ultimo.append(list_pasajera)
    list_pasajera = []

print(list_primero_ultimo)
