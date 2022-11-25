# "Business01", "Science02", "Dahyang03", "Manhae04", "Myeongjin05", "Munhwa06", "Law07", "Main08", "SocialScience09", "Sanglokwon10", "NewEngineering11", "Wonheung12", "InformationEngineering13", "Library14", "Haklim15", "Student16", "Haksul17", "Hyehwa18"

import heapq
import json

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    queue = []
    heapq.heappush(queue, [distances[start], start])
    while queue:
        current_distance, current_destination = heapq.heappop(queue)
        if distances[current_destination] < current_distance:
            continue
        for new_destination, new_distance in graph[current_destination].items():
            distance = current_distance + new_distance
            if distance < distances[new_destination]:
                distances[new_destination] = distance
                heapq.heappush(queue, [distance, new_destination])
    item = list(distances.items())
    new_item = []
    for i in range(len(item)):
        new_item.append([item[i][1], item[i][0]])
    return new_item

graph = {
    '경영관': {'문화관':11, '사회과학관':57},
    '과학관': {'명진관':37,'상록원':31, 'K':46, 'J':43},
    '다향관': {'E':18},
    '만해관': {'법학관':63, '혜화관':54, 'A':33},
    '명진관': {'과학관':37, 'B':32},
    '문화관': {'경영관':11, '사회과학관':76, '학술관':15},
    '법학관': {'만해관':63, 'A':40, 'G':33, 'H':12},
    '본관': {'원흥관': 31, 'D':12},
    '사회과학관': {'경영관':57, '문화관':76, '혜화관':46, '혜화문':68},
    '상록원': {'과학관':31, 'K':47, '대운동장':26},
    '신공학관': {'C':88, '원흥관':22},
    '원흥관': {'본관':31, '신공학관':22, '정보문화관':20, 'N':35},
    '정보문화관': {'원흥관':20, 'O':28, '학생회관':16},
    '중앙도서관': {'C':26, 'K':54, '신공학관':64},
    '학림관': {'체육관':56, 'P':108, '후문':79},
    '학생회관': {'O':24, '정보문화관':16},
    '학술관': {'문화관':15},
    '혜화관': {'만해관':54, '사회과학관':46, '혜화문':75},
    '혜화문': {'혜화관':75, '사회과학관':68},
    '대운동장': {'A':129, '상록원':26},
    '체육관': {'M': 76, '학림관':56},
    '후문': {'학림관':79, 'O':120, 'P':83},
    '만해광장': {'N':17},
    '팔정도': {'A':49, 'B':39, 'C':49, 'D':39, 'E':49, 'F':39, 'G':49, 'H':39},
    'A': {'만해관':33, '법학관':39, 'B':38, 'H':35, '대운동장':129, '팔정도':49, 'J':61},
    'B': {'명진관':32, 'A':38, 'C':38, '팔정도':39},
    'C': {'신공학관':88, 'B':38, 'D':35, '팔정도':49, '중앙도서관':26},
    'D': {'본관':12, 'C':35, 'E':35, '팔정도':39},
    'E': {'다향관':18, 'D':35, 'F':38, '팔정도':49, 'M':55},
    'F': {'E':38, 'G':38, '팔정도':39},
    'G': {'F':38, '법학관':33, 'H':35, '팔정도':49},
    'H': {'법학관':12, 'A':35, 'G':35, '팔정도':39},
    'J': {'A': 61, '과학관':43, 'K':89},
    'K': {'과학관':46, '상록원':47, '중앙도서관':54, 'J':89},
    'M': {'E':55, 'N':49, '체육관':76},
    'N': {'원흥관':35, 'M': 49, 'O':105, '만해광장':17},
    'O': {'정보문화관':28, '학생회관':24, 'N':105, '후문':120, 'P':46},
    'P': {'학림관':108, '후문':83, 'O':46}
}

ListBusiness01 = dijkstra(graph, "경영관")[:18]
ListBusiness01.sort()
ListScience02 = dijkstra(graph, "과학관")[:18]
ListScience02.sort()
ListDahyang03 = dijkstra(graph, "다향관")[:18]
ListDahyang03.sort()
ListManhae04 = dijkstra(graph, "만해관")[:18]
ListManhae04.sort()
ListMyeongjin05 = dijkstra(graph, "명진관")[:18]
ListMyeongjin05.sort()
ListMunhwa06 = dijkstra(graph, "문화관")[:18]
ListMunhwa06.sort()
ListLaw07 = dijkstra(graph, "법학관")[:18]
ListLaw07.sort()
ListMain08 = dijkstra(graph, "본관")[:18]
ListMain08.sort()
ListSocialScience09 = dijkstra(graph, "사회과학관")[:18]
ListSocialScience09.sort()
ListSanglokwon10 = dijkstra(graph, "상록원")[:18]
ListSanglokwon10.sort()
ListNewEngineering11 = dijkstra(graph, "신공학관")[:18]
ListNewEngineering11.sort()
ListWonheung12 = dijkstra(graph, "원흥관")[:18]
ListWonheung12.sort()
ListInformationEngineering13 = dijkstra(graph, "정보문화관")[:18]
ListInformationEngineering13.sort()
ListLibrary14 = dijkstra(graph, "중앙도서관")[:18]
ListLibrary14.sort()
ListHaklim15 = dijkstra(graph, "학림관")[:18]
ListHaklim15.sort()
ListStudent16 = dijkstra(graph, "학생회관")[:18]
ListStudent16.sort()
ListHaksul17 = dijkstra(graph, "학술관")[:18]
ListHaksul17.sort()
ListHyehwa18 = dijkstra(graph, "혜화관")[:18]
ListHyehwa18.sort()

Business01 = {"name":"경영관", "복사기":True, "유인복사실":False, "열람실":False, "atm":False, "증명서자동발급기":False, "제세동기":False, "식당":False, "카페":True, "매점":False}
Science02 = {"name":"과학관", "복사기":True, "유인복사실":True, "열람실":False, "atm":False, "증명서자동발급기":False, "제세동기":True, "식당":False, "카페":True, "매점":False}
Dahyang03 = {"name":"다향관", "복사기":False, "유인복사실":False, "열람실":False, "atm":False, "증명서자동발급기":False, "제세동기":False, "식당":False, "카페":False, "매점":True}
Manhae04 = {"name":"만해관", "복사기":True, "유인복사실":False, "열람실":False, "atm":False, "증명서자동발급기":False, "제세동기":False, "식당":False, "카페":False, "매점":False}
Myeongjin05 = {"name":"명진관", "복사기":True, "유인복사실":True, "열람실":True, "atm":True, "증명서자동발급기":False, "제세동기":False, "식당":False, "카페":False, "매점":False}
Munhwa06 = {"name":"문화관", "복사기":True, "유인복사실":False, "열람실":False, "atm":True, "증명서자동발급기":True, "제세동기":True, "식당":False, "카페":False, "매점":False}
Law07 = {"name":"법학관", "복사기":False, "유인복사실":False, "열람실":False, "atm":False, "증명서자동발급기":False, "제세동기":True, "식당":False, "카페":False, "매점":True}
Main08 = {"name":"본관", "복사기":False, "유인복사실":False, "열람실":False, "atm":False, "증명서자동발급기":False, "제세동기":True, "식당":False, "카페":True, "매점":False}
SocialScience09 = {"name":"사회과학관", "복사기":True, "유인복사실":False, "열람실":False, "atm":False, "증명서자동발급기":True, "제세동기":True, "식당":False, "카페":False, "매점":False}
Sanglokwon10 = {"name":"상록원", "복사기":False, "유인복사실":False, "열람실":False, "atm":True, "증명서자동발급기":False, "제세동기":False, "식당":True, "카페":False, "매점":True}
NewEngineering11 = {"name":"신공학관", "복사기":True, "유인복사실":False, "열람실":False, "atm":True, "증명서자동발급기":False, "제세동기":False, "식당":True, "카페":True, "매점":True}
Wonheung12 = {"name":"원흥관", "복사기":True, "유인복사실":False, "열람실":True, "atm":True, "증명서자동발급기":False, "제세동기":False, "식당":False, "카페":False, "매점":False}
InformationEngineering13 = {"name":"정보문화관", "복사기":True, "유인복사실":False, "열람실":False, "atm":False, "증명서자동발급기":False, "제세동기":False, "식당":False, "카페":False, "매점":False}
Library14 = {"name":"중앙도서관", "복사기":True, "유인복사실":True, "열람실":False, "atm":False, "증명서자동발급기":True, "제세동기":False, "식당":False, "카페":False, "매점":True}
Haklim15 = {"name":"학림관", "복사기":True, "유인복사실":False, "열람실":True, "atm":True, "증명서자동발급기":True, "제세동기":True, "식당":False, "카페":False, "매점":True}
Student16 = {"name":"학생회관", "복사기":True, "유인복사실":False, "열람실":True, "atm":False, "증명서자동발급기":False, "제세동기":False, "식당":False, "카페":False, "매점":False}
Haksul17 = {"name":"학술관", "복사기":True, "유인복사실":False, "열람실":False, "atm":False, "증명서자동발급기":False, "제세동기":False, "식당":True, "카페":True, "매점":False}
Hyehwa18 = {"name":"혜화관", "복사기":True, "유인복사실":False, "열람실":True, "atm":True, "증명서자동발급기":False, "제세동기":False, "식당":False, "카페":True, "매점":True}

ListBuildingName = ["경영관", "과학관", "다향관", "만해관", "명진관", "문화관", "법학관", "본관", "사회과학관", "상록원", "신공학관", "원흥관", "정보문화관", "중앙도서관", "학림관", "학생회관", "학술관", "혜화관"]
ListBuilding_Convenient = [Business01, Science02, Dahyang03, Manhae04, Myeongjin05, Munhwa06, Law07, Main08, SocialScience09, Sanglokwon10, NewEngineering11, Wonheung12, InformationEngineering13, Library14, Haklim15, Student16, Haksul17, Hyehwa18]
ListConvenient = ["복사기", "유인복사실", "열람실", "atm", "증명서자동발급기", "제세동기", "식당", "카페", "매점"]

dict_convenient = {}
dict_convenient01 = {}
for convenient in ListConvenient:
    List = []
    for b in ListBusiness01:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient01[convenient] = List
dict_convenient["경영관"] = dict_convenient01

dict_convenient02 = {}
for convenient in ListConvenient:
    List = []
    for b in ListScience02:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient02[convenient] = List
dict_convenient["과학관"] = dict_convenient02

dict_convenient03 = {}
for convenient in ListConvenient:
    List = []
    for b in ListDahyang03:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient03[convenient] = List
dict_convenient["다향관"] = dict_convenient03

dict_convenient04 = {}
for convenient in ListConvenient:
    List = []
    for b in ListManhae04:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient04[convenient] = List
dict_convenient["만해관"] = dict_convenient04

dict_convenient05 = {}
for convenient in ListConvenient:
    List = []
    for b in ListMyeongjin05:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient05[convenient] = List
dict_convenient["명진관"] = dict_convenient05

dict_convenient06 = {}
for convenient in ListConvenient:
    List = []
    for b in ListMunhwa06:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient06[convenient] = List
dict_convenient["문화관"] = dict_convenient06

dict_convenient07 = {}
for convenient in ListConvenient:
    List = []
    for b in ListLaw07:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient07[convenient] = List
dict_convenient["법학관"] = dict_convenient07

dict_convenient08 = {}
for convenient in ListConvenient:
    List = []
    for b in ListMain08:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient08[convenient] = List
dict_convenient["본관"] = dict_convenient08

dict_convenient09 = {}
for convenient in ListConvenient:
    List = []
    for b in ListSocialScience09:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient09[convenient] = List
dict_convenient["사회과학관"] = dict_convenient09

dict_convenient10 = {}
for convenient in ListConvenient:
    List = []
    for b in ListSanglokwon10:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient10[convenient] = List
dict_convenient["상록원"] = dict_convenient10

dict_convenient11 = {}
for convenient in ListConvenient:
    List = []
    for b in ListNewEngineering11:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient11[convenient] = List
dict_convenient["신공학관"] = dict_convenient11

dict_convenient12 = {}
for convenient in ListConvenient:
    List = []
    for b in ListWonheung12:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient12[convenient] = List
dict_convenient["원흥관"] = dict_convenient12

dict_convenient13 = {}
for convenient in ListConvenient:
    List = []
    for b in ListInformationEngineering13:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient13[convenient] = List
dict_convenient["정보문화관"] = dict_convenient13

dict_convenient14 = {}
for convenient in ListConvenient:
    List = []
    for b in ListLibrary14:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient14[convenient] = List
dict_convenient["중앙도서관"] = dict_convenient14

dict_convenient15 = {}
for convenient in ListConvenient:
    List = []
    for b in ListHaklim15:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient15[convenient] = List
dict_convenient["학림관"] = dict_convenient15

dict_convenient16 = {}
for convenient in ListConvenient:
    List = []
    for b in ListStudent16:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient16[convenient] = List
dict_convenient["학생회관"] = dict_convenient16

dict_convenient17 = {}
for convenient in ListConvenient:
    List = []
    for b in ListHaksul17:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient17[convenient] = List
dict_convenient["학술관"] = dict_convenient17

dict_convenient18 = {}
for convenient in ListConvenient:
    List = []
    for b in ListHyehwa18:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and bc.get(convenient)==True:
                List.append(bc.get("name"))
    dict_convenient18[convenient] = List
dict_convenient["혜화관"] = dict_convenient18

file_path = "./frontend/src/convenient.json"
with open(file_path, 'w', encoding='utf-8') as outfile:
    json.dump(dict_convenient, outfile, ensure_ascii=False, indent=4)