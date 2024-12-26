//
//  ContentView.swift
//  FirstApp
//
//  Created by SHARATH KUMAR BALNE on 11/07/24.
//

import SwiftUI

enum Emoji: String, CaseIterable {
    case smiley = "😊"
    case heart = "❤️"
    case star = "⭐️"
    case fuck = "🖕"
}

struct ContentView: View {
    @State var selection: Emoji = .smiley

    var body: some View {
        NavigationView {
            VStack {
                Text(selection.rawValue)
                    .font(.system(size: 150))
                Picker("Select Emoji", selection: $selection) {
                    ForEach(Emoji.allCases, id: \.self) { emoji in
                        Text(emoji.rawValue)
                    }
                }
                .pickerStyle(.segmented)
            }
            .navigationTitle("Emojis ra faffa")
            .padding()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
