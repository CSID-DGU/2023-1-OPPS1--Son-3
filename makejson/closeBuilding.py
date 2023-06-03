import heapq
import json

"""
import os
"""

# 다익스트라 알고리즘 구현
def dijkstra(graph, start):   # 그래프와 출발지 입력
    distances = {node: float('inf') for node in graph}   # 거리 배열의 거리를 모두 inf로 초기화
    distances[start] = 0   # 출발지의 거리 0으로 설정
    queue = []   # 우선순위 큐 생성
    heapq.heappush(queue, [distances[start], start])   # [거리, 노드] 형태로 우선순위 큐에 삽입
    while queue:
        current_distance, current_destination = heapq.heappop(queue)
        if distances[current_destination] < current_distance:
            continue
        for new_destination, new_distance in graph[current_destination].items():
            distance = current_distance + new_distance
            if distance < distances[new_destination]:   # (기존 거리 + 추가되는 거리) < (거리 배열의 거리) 인 경우
                distances[new_destination] = distance   # 거리 배열의 거리를 (기존 거리 + 추가되는 거리)로 업데이트
                heapq.heappush(queue, [distance, new_destination])   # 우선순위 큐에 삽입
    item = list(distances.items())
    new_item = []
    for i in range(len(item)):
        new_item.append([item[i][1], item[i][0]])   # [가중치 합, 도착지] 형태로 리스트에 삽입
    return new_item

def merge_lists(lists, key):
    merged_list = []
    for list in lists:
        for item in list:
            if item[1] in [x[1] for x in merged_list]:
                for i, val in enumerate(merged_list):
                    if val[1] == item[1] and val[0] > item[0]:
                        merged_list[i] = item
            else:
                merged_list.append(item)
    merged_list.sort(key=key)
    return merged_list[:22]

# 동국대 지도를 그래프로 구현
# 건물과 길목은 노드로 설정 (건물의 노드는 건물명, 길목의 노드는 알파벳으로 설정)
# 길은 간선으로 설정
# 가중치는 노드 간 직선거리 (네이버 지도로 측정)
graph = {
    '경영관': {'사회과학관': 47, '문화관': 60, 'QQ': 80},
    '과학관': {'B': 1, 'D': 1},
    '다향관': {'L': 35, 'O': 37},
    '만해관': {'F': 20, 'M': 15, '법학관': 38},
    '명진관': {'D': 22, 'G': 17},
    '문화관': {'U': 105, '사회과학관': 53, '경영관': 60, '학술관': 40, 'OO': 72},
    '법학관': {'만해관': 38, 'P': 4, 'LL': 6},
    '본관1층': {'본관3층': 66, 'Q': 23, 'R': 13},
    '본관3층': {'본관1층': 66, 'J': 20, 'L': 10},
    '사회과학관': {'문화관': 53, '경영관': 47, 'QQ': 50, 'PP': 29},
    '상록원': {'A': 14, 'KK': 37},
    '신공학관': {'Q': 32},
    '원흥관1층': {'II': 18, '원흥관4층': 30, '원흥관6층': 44},
    '원흥관4층': {'R': 17, '원흥관1층': 30, '원흥관6층': 15},
    '원흥관6층': {'Q': 23, '원흥관4층': 15, '원흥관1층': 44},
    '정보문화관': {'II': 11, 'FF': 8},
    '중앙도서관': {'H': 12, 'Q': 50},
    '학림관': {'EE': 75, 'Y': 70, '체육관': 32},
    '학생회관': {'AA': 5, 'BB': 25},
    '학술관': {'문화관': 40, 'U': 72},
    '혜화관1층': {'혜화관4층': 26, 'PP': 20},
    '혜화관4층': {'혜화관1층': 26, 'M': 35},
    '혜화문': {'OO': 75, 'U': 43},
    '대운동장': {'KK': 20},
    '체육관': {'V': 97, '학림관': 32},
    '후문': {'EE': 15},
    '만해광장': {'W': 1, 'GG': 22},
    '팔정도': {'G': 36, 'J': 50, 'K': 36, 'L': 50, 'N': 36, 'O': 52, 'P': 41, 'F': 56},
    'A': {'B': 31, '상록원': 14},
    'B': {'과학관': 1, 'C': 12, 'A': 31},
    'C': {'B': 12, 'D': 50, 'H': 54},
    'D': {'과학관': 1, '명진관': 22, 'C': 50, 'E': 37},
    'E': {'D': 37, 'F': 57},
    'F': {'X': 45, '만해관': 20, '팔정도': 56, 'P': 35, 'G': 45, 'E': 57},
    'G': {'명진관': 17, '팔정도': 36, 'F': 45, 'J': 36},
    'H': {'C': 54, 'I': 14, '중앙도서관': 12},
    'I': {'H': 14, 'J': 14, 'Q': 50},
    'J': {'K': 34, '팔정도': 50, 'G': 36, 'I': 14, '본관3층': 20},
    'K': {'팔정도': 36, 'J': 34, 'L': 36},
    'L': {'K': 36, '팔정도': 50, 'N': 34, '다향관': 35, 'T': 30, 'S': 37, '본관3층': 10},
    'M': {'만해관': 15, 'Z': 40, 'MM': 48, '혜화관4층': 35},
    'N': {'팔정도': 36, 'O': 36, 'L': 34},
    'O': {'다향관': 37, 'N': 36, '팔정도': 52, 'P': 38, 'LL': 36},
    'P': {'법학관': 4, 'O': 38, 'F': 35, '팔정도': 41},
    'Q': {'신공학관': 32, '중앙도서관': 50, '본관1층': 23, '원흥관6층': 23, 'R': 73, 'I': 50},
    'R': {'Q': 73, '본관1층': 13, 'S': 24, 'JJ': 21, '원흥관4층': 17},
    'S': {'L': 37, 'R': 24, 'JJ': 30},
    'T': {'L': 30, 'V': 32},
    'U': {'학술관': 72, '문화관': 105, '혜화문': 43},
    'V': {'체육관': 97, 'T': 32, 'W': 31},
    'W': {'만해광장': 1, 'JJ': 18, 'V': 31},  # 만해광장 앞
    'X': {'F': 45, 'Z': 34, 'KK': 40},
    'Y': {'AA': 30, '학림관': 70},
    'Z': {'X': 34, 'M': 40},
    'AA': {'학생회관': 5, 'FF': 30, 'Y': 30},
    'BB': {'학생회관': 25, 'CC': 20},
    'CC': {'BB': 20, 'DD': 50},
    'DD': {'CC': 50, 'EE': 20},
    'EE': {'학림관': 75, 'DD': 20, '후문': 15},
    'FF': {'정보문화관': 8, 'GG': 23, 'AA': 30},
    'GG': {'만해광장': 22, 'HH': 11, 'FF': 23},
    'HH': {'GG': 11, 'JJ': 65, 'II': 30},
    'II': {'HH': 30, '원흥관1층': 18, '정보문화관': 11},
    'JJ': {'R': 21, 'S': 30, 'W': 18, 'HH': 65},
    'KK': {'대운동장': 20, 'X': 40, 'SS': 43, '상록원': 37},
    'LL': {'법학관': 6, 'O': 36, 'MM': 47},
    'MM': {'M': 48, 'NN': 33, 'LL': 47},
    'NN': {'MM': 33, 'OO': 52},
    'OO': {'PP': 53, '문화관': 72, '혜화문': 75, 'NN': 52},
    'PP': {'QQ': 70, '사회과학관': 29, 'OO': 53, '혜화관1층': 20},
    'QQ': {'사회과학관': 50, 'PP': 70, 'RR': 70, '경영관': 80},
    'RR': {'SS': 27, 'QQ': 70},
    'SS': {'KK': 43, 'RR': 27}
}

RealBusiness01 = dijkstra(graph, "경영관")[:22]
RealScience02 = dijkstra(graph, "과학관")[:22]
RealDahyang03 = dijkstra(graph, "다향관")[:22]
RealManhae04 = dijkstra(graph, "만해관")[:22]
RealMyeongjin05 = dijkstra(graph, "명진관")[:22]
RealMunhwa06 = dijkstra(graph, "문화관")[:22]
RealLaw07 = dijkstra(graph, "법학관")[:22]
RealMain081 = dijkstra(graph, "본관1층")[:22]
RealMain083 = dijkstra(graph, "본관3층")[:22]
RealSocialScience09 = dijkstra(graph, "사회과학관")[:22]
RealSanglokwon10 = dijkstra(graph, "상록원")[:22]
RealNewEngineering11 = dijkstra(graph, "신공학관")[:22]
RealWonheung121 = dijkstra(graph, "원흥관1층")[:22]
RealWonheung124 = dijkstra(graph, "원흥관4층")[:22]
RealWonheung126 = dijkstra(graph, "원흥관6층")[:22]
RealInformationEngineering13 = dijkstra(graph, "정보문화관")[:22]
RealLibrary14 = dijkstra(graph, "중앙도서관")[:22]
RealHaklim15 = dijkstra(graph, "학림관")[:22]
RealStudent16 = dijkstra(graph, "학생회관")[:22]
RealHaksul17 = dijkstra(graph, "학술관")[:22]
RealHyehwa181 = dijkstra(graph, "혜화관1층")[:22]
RealHyehwa184 = dijkstra(graph, "혜화관4층")[:22]

# 본관 합치기
RealMain08 = merge_lists([RealMain081, RealMain083], lambda x: x[0])

# 원흥관 합치기
RealWonheung12 = merge_lists([RealWonheung121, RealWonheung124, RealWonheung126], lambda x: x[0])

# 혜화관 합치기
RealHyehwa18 = merge_lists([RealHyehwa181, RealHyehwa184], lambda x: x[0])

# 각 건물을 출발지로 설정해 다익스트라 알고리즘 실행
# A, B, ... 와 같은 길목의 노드는 출력되지 않게 설정
ListBusiness01 = dijkstra(graph, "경영관")[:18]
ListBusiness01.sort()   # 가중치의 합이 작은 것부터 정렬 => 출발지로부터 가까운 순으로 건물 정렬
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

# 각 건물의 편의시설 정보를 딕셔너리로 구현
# 편의시설 추가 및 삭제는 아래 딕셔너리 수정하기
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
Wonheung12 = {"name":"원흥관", "복사기":["원흥관 3층"], "유인복사실":[], "열람실":["원흥관 3층 북카페", "원흥관 3층 i space"], "atm":["원흥관 4층 신한"], "증명서자동발급기":[], "제세동기":[], "식당":[], "카페":[], "매점":[]}
InformationEngineering13 = {"name":"정보문화관", "복사기":["정보문화관P 3층"], "유인복사실":[], "열람실":[], "atm":[], "증명서자동발급기":[], "제세동기":[], "식당":[], "카페":[], "매점":[]}
Library14 = {"name":"중앙도서관", "복사기":["중앙도서관 지하2층", "중앙도서관 지하1층", "중앙도서관 1층", "중앙도서관 3층", "중앙도서관 4층"], "유인복사실":["중앙도서관 지하1층"], "열람실":[], "atm":[], "증명서자동발급기":["중앙도서관 2층"], "제세동기":[], "식당":[], "카페":[], "매점":["중앙도서관 4층"]}
Haklim15 = {"name":"학림관", "복사기":["학림관 1층", "학림관 2층"], "유인복사실":[], "열람실":["학림관 1층 라운지 샘"], "atm":["학림관 1층 신한"], "증명서자동발급기":["학림관 1층"], "제세동기":["학림관 1층"], "식당":[], "카페":[], "매점":["학림관 지하1층"]}
Student16 = {"name":"학생회관", "복사기":["학생회관 1층"], "유인복사실":[], "열람실":["학생회관 1층 i space"], "atm":[], "증명서자동발급기":[], "제세동기":[], "식당":[], "카페":[], "매점":[]}
Haksul17 = {"name":"학술관", "복사기":["학술관 1층"], "유인복사실":[], "열람실":[], "atm":[], "증명서자동발급기":[], "제세동기":[], "식당":["학술관 지하1층 가든쿡"], "카페":["학술관 지하1층 두리터"], "매점":[]}
Hyehwa18 = {"name":"혜화관", "복사기":["혜화관 1층"], "유인복사실":[], "열람실":["혜화관 1층 라운지"], "atm":["혜화관 1층 국민"], "증명서자동발급기":[], "제세동기":[], "식당":[], "카페":["혜화관 1층 무인카페", "혜화관 야외 카페ing", ], "매점":["혜화관 4층"]}

ListBuildingName = ["경영관", "과학관", "다향관", "만해관", "명진관", "문화관", "법학관", "본관", "사회과학관", "상록원", "신공학관", "원흥관", "정보문화관", "중앙도서관", "학림관", "학생회관", "학술관", "혜화관"]
ListBuilding = [ListBusiness01, ListScience02, ListDahyang03, ListManhae04, ListMyeongjin05, ListMunhwa06, ListLaw07, ListMain08, ListSocialScience09, ListSanglokwon10, ListNewEngineering11, ListWonheung12, ListInformationEngineering13, ListLibrary14, ListHaklim15, ListStudent16, ListHaksul17, ListHyehwa18]
ListBuilding_Convenient = [Business01, Science02, Dahyang03, Manhae04, Myeongjin05, Munhwa06, Law07, Main08, SocialScience09, Sanglokwon10, NewEngineering11, Wonheung12, InformationEngineering13, Library14, Haklim15, Student16, Haksul17, Hyehwa18]
ListConvenient = ["복사기", "유인복사실", "열람실", "atm", "증명서자동발급기", "제세동기", "식당", "카페", "매점"]


#건물별 편의시설 json파일 제작
dict_eachconvenient = {}
for building in ListBuilding_Convenient:
    building_name = building["name"]
    dict_eachconvenient[building_name] = {}
    for facility in ListConvenient:
        if building[facility]:
            dict_eachconvenient[building_name][facility] = building[facility]

#건물별 편의시설 json파일 저장
file_path = "./frontend/src/eachconvenient.json"
with open(file_path, 'w', encoding='utf-8') as outfile:
    json.dump(dict_eachconvenient, outfile, ensure_ascii=False, indent=4)


dict_convenient = {}
dict_convenient01 = {}
for convenient in ListConvenient:
    List = []
    for b in ListBusiness01:   # 경영관에서 가까운 순으로 정렬된 건물부터 시작
        for bc in ListBuilding_Convenient:
            if b[1] == bc.get("name") and len(bc.get(convenient))!=0:   # 해당 편의시설이 있다면 리스트에 추가
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

# json 파일로 저장

file_path = "./frontend/src/convenient.json"
with open(file_path, 'w', encoding='utf-8') as outfile:
    json.dump(dict_convenient, outfile, ensure_ascii=False, indent=4)

"""
parent_directory = os.path.abspath('..')
file_path = os.path.join(parent_directory, "./frontend/src/convenient.json")
with open(file_path, 'w', encoding='utf-8') as outfile:
    json.dump(dict_convenient, outfile, ensure_ascii=False, indent=4)
"""

'''
출력형태
{
    출발 건물1: {
        편의시설1: [
            가까운 건물11,
            가까운 건물12,
            ...
        ],
        편의시설2: [
            가까운 건물21,
            가까운 건물22,
            ...
        ]
    },
    출발 건물2: {
        편의시설1: [
            가까운 건물11,
            가까운 건물12,
            ...
        ],
        편의시설2: [
            가까운 건물21,
            가까운 건물22,
            ...
        ]
    },
    ...
}
'''