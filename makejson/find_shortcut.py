# 지도만 이용해서 알 수 없는 지름길 정보(제목, 이미지 주소, 설명)을 딕셔너리로 정리
image_info = {
    "만해관1" : {"title":"만해관 문", "img" : "/건물경로 이미지/만해관_문.jpg", "info" : "팔정도 출발기준 : 법학관에서 정각원 방향으로 가는 중간위치에 만해관 쪽문 있음"},
    "만해관2" : {"title":"만해관 문", "img" : "/건물경로 이미지/만해관_문.jpg", "info" : "법학관과 만해관은 연결되어 있음"},
    "원흥관11" : {"title" : "원흥관 엘리베이터와 연결된 계단", "img" : "/건물경로 이미지/원흥관_엘베계단.jpg", "info" : "원흥관 내부에서 건물안으로 쭉 걸어오면 계단있음"},
    "원흥관21" : {"title" : "원흥관 엘리베이터", "img" : "/건물경로 이미지/원흥관_엘베.jpg", "info" : "원흥관 엘레베이터는 2층부터 있음"},
    "원흥관31" : {"title" : "원흥관 6층 통로", "img" : "/건물경로 이미지/원흥관_6층통로.jpg", "info" : "원흥관 6층에서 내려  좌회전 -> 직진하면 왼쪽방향에 쪽문 있음"},
    "원흥관41" : {"title" : "원흥관 <-> 신공학관", "img" : "/건물경로 이미지/원흥관_연결통로.jpg", "info" : "원흥관 -> 신공학관으로 이어지는 외부통로 있음"},
    "원흥관12" : {"title" : "원흥관 엘리베이터와 연결된 계단", "img" : "/건물경로 이미지/원흥관_엘베계단.jpg", "info" : "1층 이용 시 계단 이용"},
    "원흥관22" : {"title" : "원흥관 엘리베이터", "img" : "/건물경로 이미지/원흥관_엘베.jpg", "info" : "엘레베이터는 2층까지만 존재"},
    "원흥관32" : {"title" : "원흥관 6층 통로", "img" : "/건물경로 이미지/원흥관_6층통로.jpg", "info" : "외부 통로 안으로 들어와서 직진 후 왼쪽 꺾어서 오른쪽 보면 엘리베이터 있음"},
    "원흥관42" : {"title" : "원흥관 <-> 신공학관", "img" : "/건물경로 이미지/원흥관_연결통로.jpg", "info" : "신공학관에서 원흥관을 잇는 외부 통로 있음"},
    "중앙도서관" : {"title" : "중앙도서관 뒷문", "img" : "/건물경로 이미지/중앙도서관_뒷문.jpg", "info" : "중앙도서관 정문 외에도 신공학관으로 가는길 사이에 쪽문 있음"},
    "경영관1" : {"title" : "경영관 <-> 문화관", "img" : "/건물경로 이미지/경영관_문화관.jpg", "info" : "경영관 2층에서 문화관과 이어지는 통로 있음"},
    "경영관2" : {"title" : "문화관 <-> 경영관", "img" : "/건물경로 이미지/경영관_문화관.jpg", "info" : "문화관 4층에서 경영관 2층과 이어지는 통로 있음"},
    "과학관1" : {"title" : "과학관 옆문", "img" : "/건물경로 이미지/과학관_옆문.jpg", "info" : "상록원 입구에서 쭉 직진 후, 오른쪽 문"},
    "과학관2" : {"title" : "과학관 옆문", "img" : "/건물경로 이미지/과학관_옆문.jpg", "info" : "과학관 쪽문으로 나와서 왼쪽방향 앞 건물이 상록원"},
    "사회과학관1" : {"title" : "사회과학관 엘리베이터", "img" : "/건물경로 이미지/사회과학관_엘베.JPEG", "info" : "쿱스켓(매점)방향으로 나오면 사과관 및 경영관으로 가는 엘베 있음"},
    "사회과학관2" : {"title" : "사회과학관 엘리베이터", "img" : "/건물경로 이미지/사회과학관_엘베.JPEG", "info" : "엘베 지하 1층 내려서 직진 후 오른쪽 방향 건물이 문화관"},
    "상록원1" : {"title" : "상록원 <-> 대운동장", "img" : "/건물경로 이미지/상록원_대운동장.jpg", "info" : "상록원 올라가는 계단에서 왼쪽 방향으로 가면 대운동장과 이어지는 길 있음"},
    "상록원2" : {"title" : "상록원 <-> 대운동장", "img" : "/건물경로 이미지/상록원_대운동장.jpg", "info" : "대운동장 입구에서  오른쪽 방향 긴 계단으로 올라가면 상록원"},
    "학림관" : {"title" : "헐떡고개", "img" : "/건물경로 이미지/헐떡고개.jpg", "info" : "팔정도 <-> 학림관 및 체육관으로 가는 가장 빠른 길"},
    "혜화관1" : {"title" : "혜화관 <-> 만해관", "img" : "/건물경로 이미지/혜화관_만해관.jpg", "info" : "혜화관 4층에 내려 매점 옆에 밖으로 나가는 길이 만해관과 이어짐"},
    "혜화관2" : {"title" : "혜화관 <-> 만해관", "img" : "/건물경로 이미지/혜화관_만해관.jpg", "info" : "만해관에서 직진해서 내려오면 혜화관4층이랑 연결되는 다리 있음"}
              }

import json
import os

# find_path로 정리한 빠른길 그래프 경로 불러오기
parent_directory = os.path.abspath('..')
openfile = os.path.join(parent_directory, "./frontend/src/lib/path/path1.json")
with open(openfile, "r", encoding='UTF8') as f:
    path_data = json.load(f)

dict_key = list(path_data.keys())

shortcut_all = {}
for start in dict_key:
    shortcuts = {}
    for end in dict_key:
        shortcut = []
        for i in range(1, len(path_data[start][end])):
            sc = []

            # F -> 만해관
            if path_data[start][end][i-1]=="F" and path_data[start][end][i]=="만해관":
                sc.append(image_info["만해관1"]["title"])
                sc.append(image_info["만해관1"]["img"])
                sc.append(image_info["만해관1"]["info"])
                shortcut.append(sc)
            
            # 만해관 -> F
            if path_data[start][end][i-1]=="만해관" and path_data[start][end][i]=="F":
                sc.append(image_info["만해관2"]["title"])
                sc.append(image_info["만해관2"]["img"])
                sc.append(image_info["만해관2"]["info"])
                shortcut.append(sc)

            # II -> 원흥관1층
            elif path_data[start][end][i-1]=="II" and path_data[start][end][i]=="원흥관1층":
                sc.append(image_info["원흥관11"]["title"])
                sc.append(image_info["원흥관11"]["img"])
                sc.append(image_info["원흥관11"]["info"])
                shortcut.append(sc)

            # 원흥관1층 -> II
            elif path_data[start][end][i - 1] == "원흥관1층" and path_data[start][end][i] == "II":
                sc.append(image_info["원흥관12"]["title"])
                sc.append(image_info["원흥관12"]["img"])
                sc.append(image_info["원흥관12"]["info"])
                shortcut.append(sc)

            # 원흥관1층 -> 원흥관4층
            elif path_data[start][end][i - 1] == "원흥관1층" and path_data[start][end][i] == "원흥관4층":
                sc.append(image_info["원흥관21"]["title"])
                sc.append(image_info["원흥관21"]["img"])
                sc.append(image_info["원흥관21"]["info"])
                shortcut.append(sc)

            # 원흥관4층 -> 원흥관1층
            elif path_data[start][end][i - 1] == "원흥관4층" and path_data[start][end][i] == "원흥관1층":
                sc.append(image_info["원흥관22"]["title"])
                sc.append(image_info["원흥관22"]["img"])
                sc.append(image_info["원흥관22"]["info"])
                shortcut.append(sc)

            # 원흥관4층 -> 원흥관6층
            elif path_data[start][end][i - 1] == "원흥관4층" and path_data[start][end][i] == "원흥관6층":
                sc.append(image_info["원흥관21"]["title"])
                sc.append(image_info["원흥관21"]["img"])
                sc.append(image_info["원흥관21"]["info"])
                shortcut.append(sc)

            # 원흥관6층 -> 원흥관4층
            elif path_data[start][end][i - 1] == "원흥관6층" and path_data[start][end][i] == "원흥관4층":
                sc.append(image_info["원흥관22"]["title"])
                sc.append(image_info["원흥관22"]["img"])
                sc.append(image_info["원흥관22"]["info"])
                shortcut.append(sc)

            # 원흥관1층 -> 원흥관6층
            elif path_data[start][end][i - 1] == "원흥관1층" and path_data[start][end][i] == "원흥관6층":
                sc.append(image_info["원흥관21"]["title"])
                sc.append(image_info["원흥관21"]["img"])
                sc.append(image_info["원흥관21"]["info"])
                shortcut.append(sc)

            # 원흥관6층 -> 원흥관1층
            elif path_data[start][end][i - 1] == "원흥관6층" and path_data[start][end][i] == "원흥관1층":
                sc.append(image_info["원흥관22"]["title"])
                sc.append(image_info["원흥관22"]["img"])
                sc.append(image_info["원흥관22"]["info"])
                shortcut.append(sc)
            
            # 원흥관6층 -> Q
            elif path_data[start][end][i-1]=="원흥관6층" and path_data[start][end][i]=="Q":
                sc.append(image_info["원흥관31"]["title"])
                sc.append(image_info["원흥관31"]["img"])
                sc.append(image_info["원흥관31"]["info"])
                shortcut.append(sc)
                sc = []
                sc.append(image_info["원흥관41"]["title"])
                sc.append(image_info["원흥관41"]["img"])
                sc.append(image_info["원흥관41"]["info"])
                shortcut.append(sc)

            # Q -> 원흥관6층
            elif path_data[start][end][i-1]=="Q" and path_data[start][end][i]=="원흥관6층":
                sc.append(image_info["원흥관42"]["title"])
                sc.append(image_info["원흥관42"]["img"])
                sc.append(image_info["원흥관42"]["info"])
                shortcut.append(sc)
                sc = []
                sc.append(image_info["원흥관32"]["title"])
                sc.append(image_info["원흥관32"]["img"])
                sc.append(image_info["원흥관32"]["info"])
                shortcut.append(sc)
            
            # 중앙도서관 <-> Q
            elif (path_data[start][end][i-1]=="중앙도서관" and path_data[start][end][i]=="Q") or (path_data[start][end][i-1]=="Q" and path_data[start][end][i]=="중앙도서관"):
                sc.append(image_info["중앙도서관"]["title"])
                sc.append(image_info["중앙도서관"]["img"])
                sc.append(image_info["중앙도서관"]["info"])
                shortcut.append(sc)

            # 경영관 -> 문화관
            elif path_data[start][end][i-1]=="경영관" and path_data[start][end][i]=="문화관":
                sc.append(image_info["경영관1"]["title"])
                sc.append(image_info["경영관1"]["img"])
                sc.append(image_info["경영관1"]["info"])
                shortcut.append(sc)
            
            # 문화관 -> 경영관
            elif path_data[start][end][i-1]=="문화관" and path_data[start][end][i]=="경영관":
                sc.append(image_info["경영관2"]["title"])
                sc.append(image_info["경영관2"]["img"])
                sc.append(image_info["경영관2"]["info"])
                shortcut.append(sc)

            # B -> 과학관
            elif path_data[start][end][i-1]=="B" and path_data[start][end][i]=="과학관":
                sc.append(image_info["과학관1"]["title"])
                sc.append(image_info["과학관1"]["img"])
                sc.append(image_info["과학관1"]["info"])
                shortcut.append(sc)
            
            # 과학관 -> B
            elif path_data[start][end][i-1]=="과학관" and path_data[start][end][i]=="B":
                sc.append(image_info["과학관2"]["title"])
                sc.append(image_info["과학관2"]["img"])
                sc.append(image_info["과학관2"]["info"])
                shortcut.append(sc)

            # 문화관 -> 사회과학관
            elif path_data[start][end][i-1]=="문화관" and path_data[start][end][i]=="사회과학관":
                sc.append(image_info["사회과학관1"]["title"])
                sc.append(image_info["사회과학관1"]["img"])
                sc.append(image_info["사회과학관1"]["info"])
                shortcut.append(sc)
            
            # 사회과학관 -> 문화관
            elif path_data[start][end][i-1]=="사회과학관" and path_data[start][end][i]=="문화관":
                sc.append(image_info["사회과학관2"]["title"])
                sc.append(image_info["사회과학관2"]["img"])
                sc.append(image_info["사회과학관2"]["info"])
                shortcut.append(sc)

            # 상록원 -> 대운동장
            elif path_data[start][end][i-1]=="상록원" and path_data[start][end][i]=="대운동장":
                sc.append(image_info["상록원1"]["title"])
                sc.append(image_info["상록원1"]["img"])
                sc.append(image_info["상록원1"]["info"])
                shortcut.append(sc)
            
            # 대운동장 -> 상록원
            elif path_data[start][end][i-1]=="대운동장" and path_data[start][end][i]=="상록원":
                sc.append(image_info["상록원2"]["title"])
                sc.append(image_info["상록원2"]["img"])
                sc.append(image_info["상록원2"]["info"])
                shortcut.append(sc)

            # 체육관 <-> W
            elif (path_data[start][end][i-1]=="체육관" and path_data[start][end][i]=="W") or (path_data[start][end][i-1]=="W" and path_data[start][end][i]=="체육관"):
                sc.append(image_info["학림관"]["title"])
                sc.append(image_info["학림관"]["img"])
                sc.append(image_info["학림관"]["info"])
                shortcut.append(sc)

            # 혜화관4층 -> 만해관
            elif path_data[start][end][i-1]=="혜화관4층" and path_data[start][end][i]=="만해관":
                sc.append(image_info["혜화관1"]["title"])
                sc.append(image_info["혜화관1"]["img"])
                sc.append(image_info["혜화관1"]["info"])
                shortcut.append(sc)
            
            # 만해관 -> 혜화관4층
            elif path_data[start][end][i-1]=="만해관" and path_data[start][end][i]=="혜화관4층":
                sc.append(image_info["혜화관2"]["title"])
                sc.append(image_info["혜화관2"]["img"])
                sc.append(image_info["혜화관2"]["info"])
                shortcut.append(sc)
            
            else:
                continue

        shortcuts[end] = shortcut
    shortcut_all[start] = shortcuts

# 빠른길 그래프의 지름길 정보를 shortcut1.json 으로 저장
parent_directory = os.path.abspath('..')
file_path1 = os.path.join(parent_directory, "./frontend/src/lib/shortcut/shortcut1.json")
with open(file_path1, 'w', encoding='utf-8') as outfile:
    json.dump(shortcut_all, outfile, ensure_ascii=False, indent=4)



# find_path로 정리한 편한길 그래프 경로 불러오기
parent_directory = os.path.abspath('..')
openfile2 = os.path.join(parent_directory, "./frontend/src/lib/path/path2.json")
with open(openfile2, "r", encoding='UTF8') as f:
    path_data = json.load(f)

shortcut_all2 = {}
for start in dict_key:
    shortcuts = {}
    for end in dict_key:
        shortcut = []
        for i in range(1, len(path_data[start][end])):
            sc = []

            # F -> 만해관
            if path_data[start][end][i - 1] == "F" and path_data[start][end][i] == "만해관":
                sc.append(image_info["만해관1"]["title"])
                sc.append(image_info["만해관1"]["img"])
                sc.append(image_info["만해관1"]["info"])
                shortcut.append(sc)

            # 만해관 -> F
            if path_data[start][end][i - 1] == "만해관" and path_data[start][end][i] == "F":
                sc.append(image_info["만해관2"]["title"])
                sc.append(image_info["만해관2"]["img"])
                sc.append(image_info["만해관2"]["info"])
                shortcut.append(sc)

            # II -> 원흥관1층
            elif path_data[start][end][i - 1] == "II" and path_data[start][end][i] == "원흥관1층":
                sc.append(image_info["원흥관11"]["title"])
                sc.append(image_info["원흥관11"]["img"])
                sc.append(image_info["원흥관11"]["info"])
                shortcut.append(sc)

            # 원흥관1층 -> II
            elif path_data[start][end][i - 1] == "원흥관1층" and path_data[start][end][i] == "II":
                sc.append(image_info["원흥관12"]["title"])
                sc.append(image_info["원흥관12"]["img"])
                sc.append(image_info["원흥관12"]["info"])
                shortcut.append(sc)

            # 원흥관1층 -> 원흥관4층
            elif path_data[start][end][i - 1] == "원흥관1층" and path_data[start][end][i] == "원흥관4층":
                sc.append(image_info["원흥관21"]["title"])
                sc.append(image_info["원흥관21"]["img"])
                sc.append(image_info["원흥관21"]["info"])
                shortcut.append(sc)

            # 원흥관4층 -> 원흥관1층
            elif path_data[start][end][i - 1] == "원흥관4층" and path_data[start][end][i] == "원흥관1층":
                sc.append(image_info["원흥관22"]["title"])
                sc.append(image_info["원흥관22"]["img"])
                sc.append(image_info["원흥관22"]["info"])
                shortcut.append(sc)

            # 원흥관4층 -> 원흥관6층
            elif path_data[start][end][i - 1] == "원흥관4층" and path_data[start][end][i] == "원흥관6층":
                sc.append(image_info["원흥관21"]["title"])
                sc.append(image_info["원흥관21"]["img"])
                sc.append(image_info["원흥관21"]["info"])
                shortcut.append(sc)

            # 원흥관6층 -> 원흥관4층
            elif path_data[start][end][i - 1] == "원흥관6층" and path_data[start][end][i] == "원흥관4층":
                sc.append(image_info["원흥관22"]["title"])
                sc.append(image_info["원흥관22"]["img"])
                sc.append(image_info["원흥관22"]["info"])
                shortcut.append(sc)

            # 원흥관1층 -> 원흥관6층
            elif path_data[start][end][i - 1] == "원흥관1층" and path_data[start][end][i] == "원흥관6층":
                sc.append(image_info["원흥관21"]["title"])
                sc.append(image_info["원흥관21"]["img"])
                sc.append(image_info["원흥관21"]["info"])
                shortcut.append(sc)

            # 원흥관6층 -> 원흥관1층
            elif path_data[start][end][i - 1] == "원흥관6층" and path_data[start][end][i] == "원흥관1층":
                sc.append(image_info["원흥관22"]["title"])
                sc.append(image_info["원흥관22"]["img"])
                sc.append(image_info["원흥관22"]["info"])
                shortcut.append(sc)

            # 원흥관6층 -> Q
            elif path_data[start][end][i - 1] == "원흥관6층" and path_data[start][end][i] == "Q":
                sc.append(image_info["원흥관31"]["title"])
                sc.append(image_info["원흥관31"]["img"])
                sc.append(image_info["원흥관31"]["info"])
                shortcut.append(sc)
                sc = []
                sc.append(image_info["원흥관41"]["title"])
                sc.append(image_info["원흥관41"]["img"])
                sc.append(image_info["원흥관41"]["info"])
                shortcut.append(sc)

            # Q -> 원흥관6층
            elif path_data[start][end][i - 1] == "Q" and path_data[start][end][i] == "원흥관6층":
                sc.append(image_info["원흥관42"]["title"])
                sc.append(image_info["원흥관42"]["img"])
                sc.append(image_info["원흥관42"]["info"])
                shortcut.append(sc)
                sc = []
                sc.append(image_info["원흥관32"]["title"])
                sc.append(image_info["원흥관32"]["img"])
                sc.append(image_info["원흥관32"]["info"])
                shortcut.append(sc)

            # 중앙도서관 <-> Q
            elif (path_data[start][end][i - 1] == "중앙도서관" and path_data[start][end][i] == "Q") or (
                    path_data[start][end][i - 1] == "Q" and path_data[start][end][i] == "중앙도서관"):
                sc.append(image_info["중앙도서관"]["title"])
                sc.append(image_info["중앙도서관"]["img"])
                sc.append(image_info["중앙도서관"]["info"])
                shortcut.append(sc)

            # 경영관 -> 문화관
            elif path_data[start][end][i - 1] == "경영관" and path_data[start][end][i] == "문화관":
                sc.append(image_info["경영관1"]["title"])
                sc.append(image_info["경영관1"]["img"])
                sc.append(image_info["경영관1"]["info"])
                shortcut.append(sc)

            # 문화관 -> 경영관
            elif path_data[start][end][i - 1] == "문화관" and path_data[start][end][i] == "경영관":
                sc.append(image_info["경영관2"]["title"])
                sc.append(image_info["경영관2"]["img"])
                sc.append(image_info["경영관2"]["info"])
                shortcut.append(sc)

            # B -> 과학관
            elif path_data[start][end][i - 1] == "B" and path_data[start][end][i] == "과학관":
                sc.append(image_info["과학관1"]["title"])
                sc.append(image_info["과학관1"]["img"])
                sc.append(image_info["과학관1"]["info"])
                shortcut.append(sc)

            # 과학관 -> B
            elif path_data[start][end][i - 1] == "과학관" and path_data[start][end][i] == "B":
                sc.append(image_info["과학관2"]["title"])
                sc.append(image_info["과학관2"]["img"])
                sc.append(image_info["과학관2"]["info"])
                shortcut.append(sc)

            # 문화관 -> 사회과학관
            elif path_data[start][end][i - 1] == "문화관" and path_data[start][end][i] == "사회과학관":
                sc.append(image_info["사회과학관1"]["title"])
                sc.append(image_info["사회과학관1"]["img"])
                sc.append(image_info["사회과학관1"]["info"])
                shortcut.append(sc)

            # 사회과학관 -> 문화관
            elif path_data[start][end][i - 1] == "사회과학관" and path_data[start][end][i] == "문화관":
                sc.append(image_info["사회과학관2"]["title"])
                sc.append(image_info["사회과학관2"]["img"])
                sc.append(image_info["사회과학관2"]["info"])
                shortcut.append(sc)

            # 상록원 -> 대운동장
            elif path_data[start][end][i - 1] == "상록원" and path_data[start][end][i] == "대운동장":
                sc.append(image_info["상록원1"]["title"])
                sc.append(image_info["상록원1"]["img"])
                sc.append(image_info["상록원1"]["info"])
                shortcut.append(sc)

            # 대운동장 -> 상록원
            elif path_data[start][end][i - 1] == "대운동장" and path_data[start][end][i] == "상록원":
                sc.append(image_info["상록원2"]["title"])
                sc.append(image_info["상록원2"]["img"])
                sc.append(image_info["상록원2"]["info"])
                shortcut.append(sc)

            # 체육관 <-> W
            elif (path_data[start][end][i - 1] == "체육관" and path_data[start][end][i] == "W") or (
                    path_data[start][end][i - 1] == "W" and path_data[start][end][i] == "체육관"):
                sc.append(image_info["학림관"]["title"])
                sc.append(image_info["학림관"]["img"])
                sc.append(image_info["학림관"]["info"])
                shortcut.append(sc)

            # 혜화관4층 -> 만해관
            elif path_data[start][end][i - 1] == "혜화관4층" and path_data[start][end][i] == "만해관":
                sc.append(image_info["혜화관1"]["title"])
                sc.append(image_info["혜화관1"]["img"])
                sc.append(image_info["혜화관1"]["info"])
                shortcut.append(sc)

            # 만해관 -> 혜화관4층
            elif path_data[start][end][i - 1] == "만해관" and path_data[start][end][i] == "혜화관4층":
                sc.append(image_info["혜화관2"]["title"])
                sc.append(image_info["혜화관2"]["img"])
                sc.append(image_info["혜화관2"]["info"])
                shortcut.append(sc)

            else:
                continue

        shortcuts[end] = shortcut
    shortcut_all2[start] = shortcuts

# 경사를 반영한 그래프의 지름길 정보를 shortcut2.json 으로 저장
parent_directory = os.path.abspath('..')
file_path2 = os.path.join(parent_directory, "./frontend/src/lib/shortcut/shortcut2.json")
with open(file_path2, 'w', encoding='utf-8') as outfile:
    json.dump(shortcut_all2, outfile, ensure_ascii=False, indent=4)

'''
출력형태
{
    출발지1: {
        도착지1: [
            [지름길 제목11, 지름길 사진11, 지름길 설명11],
            [지름길 제목12, 지름길 사진12, 지름길 설명12],
            ...
        ],
        도착지2: [
            [지름길 제목21, 지름길 사진21, 지름길 설명21],
            [지름길 제목22, 지름길 사진22, 지름길 설명22],
            ...
        ],
        ...
    },
    ...
}
'''