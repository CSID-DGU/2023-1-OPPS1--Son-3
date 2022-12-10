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
    '경영관': {'문화관':11, '사회과학관':57, 'QQ':63},
    '과학관': {'D':1, 'B':5},
    '다향관': {'M':5, 'WW':1},
    '만해관': {'법학관':43, '혜화관':54, 'F':33},
    '명진관': {'D':37, 'G':32},
    '문화관': {'경영관':11, '사회과학관':56, '학술관':15},
    '법학관': {'만해관':43, 'P':4},
    '본관': {'K':12, 'S':15},
    '사회과학관': {'경영관':57, '문화관':56, 'PP':1, 'QQ':46},
    '상록원': {'A':1, '대운동장':46},
    '신공학관': {'KK':25},
    '원흥관': {'Q':13, 'R':11, 'II':13},
    '정보문화관': {'VV':5, 'YY':5},
    '중앙도서관': {'H':12, 'Q':50},
    '학림관': {'체육관':50, 'X':50, 'EE':55},
    '학생회관': {'AA':5, 'BB':25},
    '학술관': {'문화관':15},
    '혜화관': {'만해관':54, 'OO':1},
    '혜화문': {'PP':85, 'NN':72},
    '대운동장': {'상록원':46, 'UU':12, 'TT':12},
    '체육관': {'학림관':50, 'W':30},
    '후문': {'EE':14},
    '만해광장': {'XX':1},
    '팔정도': {'F':49, 'P':39, 'O':49, 'N':39, 'L':49, 'K':39, 'J':49, 'G':39},
    'A': {'B':31, '상록원':1},
    'B': {'과학관':5, 'A':31, 'C':16},
    'C': {'B':16, 'D':46, 'H':54},
    'D': {'과학관':1, '명진관':37, 'C':46, 'E':43},
    'E': {'D':43, 'F':61},
    'F': {'E':61, 'G':38, '팔정도':49, 'P':29, '만해관':33, 'UU':110},
    'G': {'명진관':32, 'F':38, '팔정도':39, 'J':38},
    'H': {'C':54, '중앙도서관':12, 'I':16},
    'I': {'H':16, 'J':14},
    'J': {'I':14, 'Q':50, 'K':29, '팔정도':49, 'G':38},
    'K': {'J':29, '본관':12, 'L':29, '팔정도':39},
    'L': {'K':29, 'S':34, 'T':10, 'M':15, '팔정도':49},
    'M': {'L':15, '다향관':5, 'N':23},
    'N': {'팔정도':39, 'M':23, 'O':38},
    'O': {'팔정도':49, 'N':38, 'LL':43, 'P':29},
    'P': {'팔정도':39, 'O':29, '법학관':4, 'F':29},
    'Q': {'R':56, 'J':50, '중앙도서관':50, 'KK':32, '원흥관':13},
    'R': {'Q':56, '원흥관':11, 'JJ':36, 'S':30},
    'S': {'본관':15, 'R':30, 'L':34},
    'T': {'L':10, 'V':25, 'U':10},
    'U': {'T':10, 'WW':10},
    'V': {'T':25, 'XX':49, 'W':30},
    'W': {'V':30, '체육관':30},
    'X': {'학림관':50, 'Y':35},
    'Y': {'X':35, 'Z':20},
    'Z': {'Y':20, 'AA':26},
    'AA': {'학생회관':5, 'Z':26, 'FF':28},
    'BB': {'학생회관':25, 'CC':37},
    'CC': {'BB':37, 'DD':50},
    'DD': {'CC':50, 'EE':20},
    'EE': {'학림관':55, 'DD':20, '후문':14},
    'FF': {'YY':5, 'AA':28, 'GG':20},
    'GG': {'FF':20, 'HH':35},
    'HH': {'II':21, 'GG':35, 'JJ':35},
    'II': {'원흥관':13, 'VV':20, 'HH':21},
    'JJ': {'R':36, 'HH':35, 'XX':49},
    'KK': {'신공학관':25, 'Q':32},
    'LL': {'MM':41, 'O':43},
    'MM': {'LL':41, 'NN':77},
    'NN': {'OO':55, 'MM':77, '혜화문':72},
    'OO': {'혜화관':1, 'NN':55, 'PP':46},
    'PP': {'OO':46, '혜화문':85, '사회과학관':1},
    'QQ': {'경영관':63, 'RR':77, '사회과학관':46},
    'RR': {'QQ':77, 'SS':40},
    'SS': {'RR':40, 'TT':28},
    'TT': {'SS':28, '대운동장':12, 'UU':23},
    'UU': {'대운동장':12, 'TT':23, 'F':110},
    'VV': {'II':20, '정보문화관':5},
    'WW': {'다향관':1, 'U':10},
    'XX': {'만해광장':1, 'V':49, 'JJ':49},
    'YY': {'정보문화관':5, 'FF':5} 
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

Business01 = {"name":"경영관", "복사기":["경영관 1층"], "유인복사실":[], "열람실":["경영관 지하1층 비즈마루"], "atm":[], "증명서자동발급기":[], "제세동기":[], "식당":[], "카페":["경영관 야외 그루터기"], "매점":[]}
Science02 = {"name":"과학관", "복사기":["과학관 1층"], "유인복사실":["과학관 야외 교재실"], "열람실":[], "atm":[], "증명서자동발급기":[], "제세동기":["과학관 1층"], "식당":[], "카페":[], "매점":[]}
Dahyang03 = {"name":"다향관", "복사기":[], "유인복사실":[], "열람실":[], "atm":[], "증명서자동발급기":[], "제세동기":[], "식당":[], "카페":[], "매점":["다향관 1층"]}
Manhae04 = {"name":"만해관", "복사기":["만해관 2층"], "유인복사실":[], "열람실":[], "atm":[], "증명서자동발급기":[], "제세동기":[], "식당":[], "카페":[], "매점":[]}
Myeongjin05 = {"name":"명진관", "복사기":["명진관 1층"], "유인복사실":["명진관 1층"], "열람실":["명진관 1층 명진라운지"], "atm":["명진관 야외 신한"], "증명서자동발급기":[], "제세동기":[], "식당":[], "카페":[], "매점":[]}
Munhwa06 = {"name":"문화관", "복사기":["문화관 1층"], "유인복사실":[], "열람실":[], "atm":["문화관 1층 신한"], "증명서자동발급기":["문화관 1층"], "제세동기":["문화관 1층"], "식당":[], "카페":[], "매점":[]}
Law07 = {"name":"법학관", "복사기":[], "유인복사실":[], "열람실":[], "atm":[], "증명서자동발급기":[], "제세동기":["법학관 1층"], "식당":[], "카페":[], "매점":["법학관 2층"]}
Main08 = {"name":"본관", "복사기":[], "유인복사실":[], "열람실":[], "atm":[], "증명서자동발급기":[], "제세동기":["본관 3층"], "식당":[], "카페":["본관 야외 가온누리", "본관 야외 블루포트"], "매점":[]}
SocialScience09 = {"name":"사회과학관", "복사기":["사회과학관 2층"], "유인복사실":[], "열람실":["사회과학관 2층 능금"], "atm":[], "증명서자동발급기":["사회과학관 2층"], "제세동기":["사회과학관 2층"], "식당":[], "카페":[], "매점":[]}
Sanglokwon10 = {"name":"상록원", "복사기":[], "유인복사실":[], "열람실":[], "atm":["상록원 1층 신한 국민"], "증명서자동발급기":[], "제세동기":[], "식당":["상록원 1층", "상록원 2층", "상록원 3층"], "카페":[], "매점":["상록원 1층"]}
NewEngineering11 = {"name":"신공학관", "복사기":["신공학관 3층", "신공학관 9층"], "유인복사실":[], "열람실":[], "atm":["신공학관 1층 신한"], "증명서자동발급기":[], "제세동기":[], "식당":["신공학관 1층"], "카페":["신공학관 1층"], "매점":["신공학관 1층"]}
Wonheung12 = {"name":"원흥관", "복사기":["원흥관 3층"], "유인복사실":[], "열람실":["원흥관 3층 북카페", "원흥관 3층 i-space"], "atm":["원흥관 4층 신한"], "증명서자동발급기":[], "제세동기":[], "식당":[], "카페":[], "매점":[]}
InformationEngineering13 = {"name":"정보문화관", "복사기":["정보문화관P 3층"], "유인복사실":[], "열람실":[], "atm":[], "증명서자동발급기":[], "제세동기":[], "식당":[], "카페":[], "매점":[]}
Library14 = {"name":"중앙도서관", "복사기":["중앙도서관 지하2층", "중앙도서관 지하1층", "중앙도서관 지하1층", "중앙도서관 1층", "중앙도서관 3층", "중앙도서관 4층"], "유인복사실":["중앙도서관 지하1층"], "열람실":[], "atm":[], "증명서자동발급기":["중앙도서관 2층"], "제세동기":[], "식당":[], "카페":[], "매점":["중앙도서관 4층"]}
Haklim15 = {"name":"학림관", "복사기":["학림관 1층", "학림관 2층"], "유인복사실":[], "열람실":["학림관 1층 라운지 샘"], "atm":["학림관 1층 신한"], "증명서자동발급기":["학림관 1층"], "제세동기":["학림관 1층"], "식당":[], "카페":[], "매점":["학림관 지하1층"]}
Student16 = {"name":"학생회관", "복사기":["학생회관 1층"], "유인복사실":[], "열람실":["학생회관 1층 i-space"], "atm":[], "증명서자동발급기":[], "제세동기":[], "식당":[], "카페":[], "매점":[]}
Haksul17 = {"name":"학술관", "복사기":["학술관 1층"], "유인복사실":[], "열람실":[], "atm":[], "증명서자동발급기":[], "제세동기":[], "식당":["학술관 지하1층 가든쿡"], "카페":["학술관 지하1층 두리터"], "매점":[]}
Hyehwa18 = {"name":"혜화관", "복사기":["혜화관 1층"], "유인복사실":[], "열람실":["혜화관 1층 라운지"], "atm":["혜화관 1층 국민"], "증명서자동발급기":[], "제세동기":[], "식당":[], "카페":["혜화관 1층 무인카페", "혜화관 야외 카페ing", ], "매점":["혜화관 4층"]}

ListBuildingName = ["경영관", "과학관", "다향관", "만해관", "명진관", "문화관", "법학관", "본관", "사회과학관", "상록원", "신공학관", "원흥관", "정보문화관", "중앙도서관", "학림관", "학생회관", "학술관", "혜화관"]
ListBuilding = [ListBusiness01, ListScience02, ListDahyang03, ListManhae04, ListMyeongjin05, ListMunhwa06, ListLaw07, ListMain08, ListSocialScience09, ListSanglokwon10, ListNewEngineering11, ListWonheung12, ListInformationEngineering13, ListLibrary14, ListHaklim15, ListStudent16, ListHaksul17, ListHyehwa18]
ListBuilding_Convenient = [Business01, Science02, Dahyang03, Manhae04, Myeongjin05, Munhwa06, Law07, Main08, SocialScience09, Sanglokwon10, NewEngineering11, Wonheung12, InformationEngineering13, Library14, Haklim15, Student16, Haksul17, Hyehwa18]
ListConvenient = ["복사기", "유인복사실", "열람실", "atm", "증명서자동발급기", "제세동기", "식당", "카페", "매점"]

dict_convenient_all = {}



dict_convenient = {}
dict_convenient01 = {}
for convenient in ListConvenient:
    List = []
    for b in ListBusiness01:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient01[convenient] = List
dict_convenient["경영관"] = dict_convenient01

dict_convenient02 = {}
for convenient in ListConvenient:
    List = []
    for b in ListScience02:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient02[convenient] = List
dict_convenient["과학관"] = dict_convenient02

dict_convenient03 = {}
for convenient in ListConvenient:
    List = []
    for b in ListDahyang03:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient03[convenient] = List
dict_convenient["다향관"] = dict_convenient03

dict_convenient04 = {}
for convenient in ListConvenient:
    List = []
    for b in ListManhae04:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient04[convenient] = List
dict_convenient["만해관"] = dict_convenient04

dict_convenient05 = {}
for convenient in ListConvenient:
    List = []
    for b in ListMyeongjin05:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient05[convenient] = List
dict_convenient["명진관"] = dict_convenient05

dict_convenient06 = {}
for convenient in ListConvenient:
    List = []
    for b in ListMunhwa06:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient06[convenient] = List
dict_convenient["문화관"] = dict_convenient06

dict_convenient07 = {}
for convenient in ListConvenient:
    List = []
    for b in ListLaw07:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient07[convenient] = List
dict_convenient["법학관"] = dict_convenient07

dict_convenient08 = {}
for convenient in ListConvenient:
    List = []
    for b in ListMain08:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient08[convenient] = List
dict_convenient["본관"] = dict_convenient08

dict_convenient09 = {}
for convenient in ListConvenient:
    List = []
    for b in ListSocialScience09:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient09[convenient] = List
dict_convenient["사회과학관"] = dict_convenient09

dict_convenient10 = {}
for convenient in ListConvenient:
    List = []
    for b in ListSanglokwon10:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient10[convenient] = List
dict_convenient["상록원"] = dict_convenient10

dict_convenient11 = {}
for convenient in ListConvenient:
    List = []
    for b in ListNewEngineering11:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient11[convenient] = List
dict_convenient["신공학관"] = dict_convenient11

dict_convenient12 = {}
for convenient in ListConvenient:
    List = []
    for b in ListWonheung12:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient12[convenient] = List
dict_convenient["원흥관"] = dict_convenient12

dict_convenient13 = {}
for convenient in ListConvenient:
    List = []
    for b in ListInformationEngineering13:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient13[convenient] = List
dict_convenient["정보문화관"] = dict_convenient13

dict_convenient14 = {}
for convenient in ListConvenient:
    List = []
    for b in ListLibrary14:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient14[convenient] = List
dict_convenient["중앙도서관"] = dict_convenient14

dict_convenient15 = {}
for convenient in ListConvenient:
    List = []
    for b in ListHaklim15:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient15[convenient] = List
dict_convenient["학림관"] = dict_convenient15

dict_convenient16 = {}
for convenient in ListConvenient:
    List = []
    for b in ListStudent16:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient16[convenient] = List
dict_convenient["학생회관"] = dict_convenient16

dict_convenient17 = {}
for convenient in ListConvenient:
    List = []
    for b in ListHaksul17:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient17[convenient] = List
dict_convenient["학술관"] = dict_convenient17

dict_convenient18 = {}
for convenient in ListConvenient:
    List = []
    for b in ListHyehwa18:
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:
                if len(List)<5:
                    List += bc.get(convenient)
                else:
                    break
    dict_convenient18[convenient] = List
dict_convenient["혜화관"] = dict_convenient18

file_path = "./frontend/src/convenient.json"
with open(file_path, 'w', encoding='utf-8') as outfile:
    json.dump(dict_convenient, outfile, ensure_ascii=False, indent=4)