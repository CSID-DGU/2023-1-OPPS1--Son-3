import heapq
import json
import os


# 다익스트라 알고리즘 구현
def dijkstra(graph, first, last):  # 그래프, 출발지, 도착지 입력
    distance = {node: [float('inf'), first] for node in graph}  # 거리 배열의 거리를 모두 inf로 초기화
    distance[first] = [0, first]  # 출발지의 거리 0으로 설정
    queue = []  # 우선순위 큐 생성
    heapq.heappush(queue, [distance[first][0], first])  # [거리, 노드] 형태로 우선순위 큐에 삽입
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        if distance[current_node][0] < current_distance:
            continue
        for next_node, weight in graph[current_node].items():
            total_distance = current_distance + weight
            if total_distance < distance[next_node][0]:  # (기존 거리 + 추가되는 거리) < (거리 배열의 거리) 인 경우
                distance[next_node] = [total_distance, current_node]  # 거리 배열의 거리를 (기존 거리 + 추가되는 거리)로 업데이트
                heapq.heappush(queue, [total_distance, next_node])  # 우선순위 큐에 삽입

    # 출발지에서 도착지까지의 모든 노드 출력
    # 도착지에서부터 역순으로 추적
    path = last
    path_output = []
    path_output.append(last)
    while distance[path][1] != first:
        path_output.append(distance[path][1])
        path = distance[path][1]
    path_output.append(first)
    path_output.reverse()  # 역순으로 출력되므로 reverse 하기
    return path_output


# 다익스트라 알고리즘2 구현
def dijkstra2(graph, first, last):  # 그래프, 출발지, 도착지 입력
    distance = {node: [float('inf'), first] for node in graph}  # 거리 배열의 거리를 모두 inf로 초기화
    distance[first] = [0, first]  # 출발지의 거리 0으로 설정
    queue = []  # 큐 생성
    heapq.heappush(queue, [distance[first][0], first])  # [거리, 노드] 형태로 우선순위 큐에 삽입
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        if distance[current_node][0] < current_distance:
            continue
        for next_node, weight in graph[current_node].items():
            total_distance = current_distance + weight
            if total_distance < distance[next_node][0]:  # (기존 거리 + 추가되는 거리) < (거리 배열의 거리) 인 경우
                distance[next_node] = [total_distance, current_node]  # 거리 배열의 거리를 (기존 거리 + 추가되는 거리)로 업데이트
                heapq.heappush(queue, [total_distance, next_node])  # 우선순위 큐에 삽입

    return distance[last][0]  # 해당 경로의 가중치 합 반환


# 경사를 반영하지 않은 동국대 지도를 graph1로 구현
# 건물과 길목은 노드로 설정 (건물의 노드는 건물명, 길목의 노드는 알파벳으로 설정)
# 길은 간선으로 설정
# 가중치는 노드 간 직선거리 (네이버 지도로 측정)
graph1 = {
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

# 경사를 반영한 동국대 지도를 graph2로 구현
# 건물과 길목은 노드로 설정 (건물의 노드는 건물명, 길목의 노드는 알파벳으로 설정)
# 길은 간선으로 설정
# 가중치는 (노드 간 경로를 지날 때 칼로리 소모량, 소수점 5번째에서 반올림)
# 단순 경사 계산이라 계단은 추가 계산 필요
graph2 = {
    '경영관': {'사회과학관': 2.5336, '문화관': 3.2344, 'QQ': 4.3125},
    '과학관': {'B': 0.0539, 'D': 0.0539},
    '다향관': {'L': 1.8867, 'O': 1.9945},
    '만해관': {'F': 1.0781, 'M': 0.8086, '법학관': 2.0484},
    '명진관': {'D': 1.1859, 'G': 0.9164},
    '문화관': {'U': 5.6602, '사회과학관': 2.8570, '경영관': 3.2344, '학술관': 12.7525, 'OO': 27.9344},
    '법학관': {'만해관': 2.0484, 'P': 0.2156, 'LL': 0.3234},
    '본관1층': {'본관3층': 30.8574, 'Q': 1.2398, 'R': 0.7008},
    '본관3층': {'본관1층': 3.5578, 'J': 1.0781, 'L': 0.5391},
    '사회과학관': {'문화관': 2.8570, '경영관': 2.5336, 'QQ': 2.6953, 'PP': 1.5633},
    '상록원': {'A': 0.7547, 'KK': 1.9945},
    '신공학관': {'Q': 1.7250},
    '원흥관1층': {'II': 0.9703, '원흥관4층': 1.6172},
    '원흥관4층': {'R': 0.9164, '원흥관1층': 1.6172, '원흥관6층': 0.8086},
    '원흥관6층': {'Q': 1.2398, '원흥관4층': 0.8086},
    '정보문화관': {'II': 0.5930, 'FF': 0.4313},
    '중앙도서관': {'H': 0.6469, 'Q': 2.6953},
    '학림관': {'EE': 4.0430, 'Y': 3.7734, '체육관': 1.7250},
    '학생회관': {'AA': 0.2695, 'BB': 1.3477},
    '학술관': {'문화관': 2.1563, 'U': 3.8813},
    '혜화관1층': {'혜화관4층': 12.1559, 'PP': 1.0781},
    '혜화관4층': {'혜화관1층': 1.4016, 'M': 1.8867},
    '혜화문': {'OO': 8.5044, 'U': 2.3180},
    '대운동장': {'KK': 1.0781},
    '체육관': {'V': 19.5738, '학림관': 1.7250},
    '후문': {'EE': 2.6339},
    '만해광장': {'W': 0.0539, 'GG': 1.1859},
    '팔정도': {'G': 1.9406, 'J': 2.6953, 'K': 1.9406, 'L': 2.6953, 'N': 1.9406, 'O': 2.8031, 'P': 2.2102, 'F': 3.0187},
    'A': {'B': 1.6711, '상록원': 0.7547},
    'B': {'과학관': 0.0539, 'C': 0.6469, 'A': 1.6711},
    'C': {'B': 0.6469, 'D': 2.6953, 'H': 2.9109},
    'D': {'과학관': 0.0539, '명진관': 1.1859, 'C': 2.6953, 'E': 1.9945},
    'E': {'D': 1.9945, 'F': 3.0727},
    'F': {'X': 2.4258, '만해관': 1.0781, '팔정도': 3.0187, 'P': 1.8867, 'G': 2.4258, 'E': 3.0727},
    'G': {'명진관': 0.9164, '팔정도': 1.9406, 'F': 2.4258, 'J': 1.9406},
    'H': {'C': 2.9109, 'I': 0.7547, '중앙도서관': 0.6469},
    'I': {'H': 0.7547, 'J': 0.7547, 'Q': 2.6953},
    'J': {'K': 1.8328, '팔정도': 2.6953, 'G': 1.9406, 'I': 0.7547, '본관3층': 1.0781},
    'K': {'팔정도': 1.9406, 'J': 1.8328, 'L': 1.9406},
    'L': {'K': 1.9406, '팔정도': 2.6953, 'N': 1.8328, '다향관': 1.8867, 'T': 1.6172, 'S': 1.9945, '본관3층': 0.5391},
    'M': {'만해관': 0.8086, 'Z': 2.1563, 'MM': 2.5875, '혜화관4층': 1.8867},
    'N': {'팔정도': 1.9406, 'O': 1.9406, 'L': 1.8328},
    'O': {'다향관': 1.9945, 'N': 1.9406, '팔정도': 2.8031, 'P': 2.0484, 'LL': 1.9406},
    'P': {'법학관': 0.2156, 'O': 2.0484, 'F': 1.8867, '팔정도': 2.2102},
    'Q': {'신공학관': 1.7250, '중앙도서관': 2.6953, '본관1층': 1.2398, '원흥관6층': 1.2398, 'R': 3.9352, 'I': 2.6953},
    'R': {'Q': 3.9352, '본관1층': 0.7008, 'S': 1.2937, 'JJ': 1.1320, '원흥관4층': 0.9164},
    'S': {'L': 5.5586, 'R': 1.2937, 'JJ': 1.6172},
    'T': {'L': 1.6172, 'V': 1.7250},
    'U': {'학술관': 3.8813, '문화관': 5.6602, '혜화문': 2.3180},
    'V': {'체육관': 5.2289, 'T': 3.6286, 'W': 1.6711},
    'W': {'만해광장': 0.0539, 'JJ': 0.9703, 'V': 3.1420},  # 만해광장 앞
    'X': {'F': 6.2016, 'Z': 1.8328, 'KK': 2.1563},
    'Y': {'AA': 1.6172, '학림관': 3.7734},
    'Z': {'X': 15.1811, 'M': 2.1563},
    'AA': {'학생회관': 0.2695, 'FF': 1.6172, 'Y': 1.6172},
    'BB': {'학생회관': 3.7558, 'CC': 1.0781},
    'CC': {'BB': 2.0271, 'DD': 2.6953},
    'DD': {'CC': 8.1410, 'EE': 1.0781},
    'EE': {'학림관': 40.2040, 'DD': 3.2564, '후문': 0.8086},
    'FF': {'정보문화관': 0.4313, 'GG': 2.3311, 'AA': 1.6172},
    'GG': {'만해광장': 12.3404, 'HH': 1.1149, 'FF': 1.2398},
    'HH': {'GG': 0.5930, 'JJ': 6.5880, 'II': 1.6172},
    'II': {'HH': 1.6172, '원흥관1층': 0.9703, '정보문화관': 0.5930},
    'JJ': {'R': 2.3812, 'S': 1.6172, 'W': 2.2597, 'HH': 3.5039},
    'KK': {'대운동장': 1.0781, 'X': 5.5125, 'SS': 2.3180, '상록원': 17.2988},
    'LL': {'법학관': 0.3234, 'O': 6.3214, 'MM': 2.5336},
    'MM': {'M': 4.8650, 'NN': 1.7789, 'LL': 3.6437},
    'NN': {'MM': 8.9815, 'OO': 2.8031},
    'OO': {'PP': 2.8570, '문화관': 3.8813, '혜화문': 4.0430, 'NN': 2.8031},
    'PP': {'QQ': 3.7734, '사회과학관': 1.5633, 'OO': 2.8570, '혜화관1층': 1.0781},
    'QQ': {'사회과학관': 2.6953, 'PP': 3.7734, 'RR': 3.7734, '경영관': 4.3125},
    'RR': {'SS': 4.3961, 'QQ': 3.7734},
    'SS': {'KK': 7.5506, 'RR': 1.4555}
}

node_list = ['경영관', '과학관', '다향관', '만해관', '명진관', '문화관', '법학관', '본관1층', '본관3층', '사회과학관', '상록원', '신공학관', '원흥관1층', '원흥관4층', '원흥관6층', '정보문화관', '중앙도서관', '학림관', '학생회관', '학술관', '혜화관1층', '혜화관4층', '혜화문', '대운동장', '체육관', '후문', '만해광장', '팔정도']

# 경사를 반영하지 않은 그래프 다익스트라 알고리즘 실행
path_all1 = {}
for start in node_list:
    path_start = {}
    for end in node_list:
        path_start[end] = dijkstra(graph1, start, end)
    path_all1[start] = path_start

# 경사를 반영한 그래프 다익스트라 알고리즘 실행
path_all2 = {}
for start in node_list:
    path_start = {}
    for end in node_list:
        path_start[end] = dijkstra(graph2, start, end)
    path_all2[start] = path_start

# 경사를 반영하지 않은 그래프 다익스트라 알고리즘2 실행
path_all3 = {}
for start in node_list:
    path_start = {}
    for end in node_list:
        path_start[end] = dijkstra2(graph1, start, end)
    path_all3[start] = path_start

# 경사를 반영한 그래프 다익스트라 알고리즘2 실행
path_all4 = {}
for start in node_list:
    path_start = {}
    for end in node_list:
        path_start[end] = round(dijkstra2(graph2, start, end), 4)   #소수점 5번째 자리에서 반올림
    path_all4[start] = path_start

# 경사를 반영하지 않은 그래프를 path1.json 파일로 저장
file_path1 = "./frontend/src/lib/path/path1.json"
with open(file_path1, 'w', encoding='utf-8') as outfile:
    json.dump(path_all1, outfile, ensure_ascii=False, indent=4)

"""
parent_directory = os.path.abspath('..')
file_path1 = os.path.join(parent_directory, "./frontend/src/lib/path/path1.json")
with open(file_path1, 'w', encoding='utf-8') as outfile:
    json.dump(path_all1, outfile, ensure_ascii=False, indent=4)
"""

# 경사를 반영한 그래프를 path2.json 파일로 저장
file_path2 = "./frontend/src/lib/path/path2.json"
with open(file_path2, 'w', encoding='utf-8') as outfile:
    json.dump(path_all2, outfile, ensure_ascii=False, indent=4)

"""
parent_directory = os.path.abspath('..')
file_path2 = os.path.join(parent_directory, "./frontend/src/lib/path/path2.json")
with open(file_path2, 'w', encoding='utf-8') as outfile:
    json.dump(path_all2, outfile, ensure_ascii=False, indent=4)
"""

# 경사를 반영하지 않은 그래프2를 path1_1.json 파일로 저장
file_path3 = "./frontend/src/lib/path/path1_1.json"
with open(file_path3, 'w', encoding='utf-8') as outfile:
    json.dump(path_all3, outfile, ensure_ascii=False, indent=4)

"""
parent_directory = os.path.abspath('..')
file_path3 = os.path.join(parent_directory, "./frontend/src/lib/path/path1_1.json")
with open(file_path3, 'w', encoding='utf-8') as outfile:
    json.dump(path_all3, outfile, ensure_ascii=False, indent=4)
"""

# 경사를 반영한 그래프2를 path2_1.json 파일로 저장
file_path4 = "./frontend/src/lib/path/path2_1.json"
with open(file_path4, 'w', encoding='utf-8') as outfile:
    json.dump(path_all4, outfile, ensure_ascii=False, indent=4)

"""
parent_directory = os.path.abspath('..')
file_path4 = os.path.join(parent_directory, "./frontend/src/lib/path/path2_1.json")
with open(file_path4, 'w', encoding='utf-8') as outfile:
    json.dump(path_all4, outfile, ensure_ascii=False, indent=4)
"""

'''
출력형태
{
    출발지1: {
        도착지11: [출발지1 ~ 도착지11 노드들],
        도착지12: [출발지1 ~ 도착지12 노드들],
        ...
    },
    출발지2: {
        도착지21: [출발지2 ~ 도착지 21 노드들],
        도착지22: [출발지2 ~ 도착지 22 노드들],
        ...
    },
    ...
}
'''
