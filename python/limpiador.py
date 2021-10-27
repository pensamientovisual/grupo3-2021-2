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

paises_america_happy = [['Argentina', 59.7], ['Bolivia', 57.5], ['Brazil', 63.8], ['Canada', 72.3], ['Chile', 62.3], ['Cameroon', 50.8], ['"Congo', 0.0], ['"Congo', 54.9], ['Colombia', 61.6], ['Costa Rica', 71.2], ['Cuba', 0.0], ['Dominican Republic', 56.9], ['Ecuador', 59.3], ['Guatemala', 64.0], ['Guyana', 0.0], ['Honduras', 59.5], ['Haiti', 37.2], ['Maldives', 52.0], ['Mexico', 64.7], ['Montenegro', 55.5], ['Nicaragua', 61.4], ['Panama', 63.0], ['Peru', 58.0], ['Paraguay', 56.9], ['El Salvador', 63.5], ['Uruguay', 64.4], ['United States', 69.4], ['Venezuela', 50.5]]

paises_income = [['Argentina', 22100], ['Bahamas', 37100], ['Bosnia and Herzegovina', 14900], ['Bolivia', 8720], ['Brazil', 14700], ['Canada', 48900], ['Switzerland', 68400], ['Chile', 25100], ['Cameroon', 3640], ['"Congo', 1090], ['"Congo', 3910], ['Colombia', 14600], ['Costa Rica', 20300], ['Cuba', 9790], ['Dominican Republic', 18400], ['Ecuador', 11400], ['Guatemala', 8640], ['Honduras', 5730], ['Haiti', 2910], ['Jamaica', 9760], ['St. Kitts and Nevis', 26400], ['St. Lucia', 15400], ['Maldives', 19500], ['Mexico', 19800], ['Montenegro', 21600], ['Nicaragua', 5410], ['Panama', 31500], ['Peru', 12800], ['Paraguay', 12700], ['El Salvador', 8780], ['Trinidad and Tobago', 26200], ['Uruguay', 21600], ['United States', 62500], ['St. Vincent and the Grenadines', 12500], ['Venezuela', 8320]]
